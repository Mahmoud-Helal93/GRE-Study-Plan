import { useState, useRef, useEffect } from "react";
import { PlanBlock, PlanTask, PlanSection } from "../data/prepFlowPlan";
import { type TaskFilter } from "../lib/filters";
import { type TaskNote } from "../hooks/usePlanOverrides";
import TaskNotes from "./TaskNotes";

/* ── Task action interface ──────────────────────────────────────── */
export interface TaskActions {
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string, newTitle: string) => void;
  onMoveUp: (blockId: string, sectionIdx: number, taskId: string, currentOrder: string[]) => void;
  onMoveDown: (blockId: string, sectionIdx: number, taskId: string, currentOrder: string[]) => void;
  onAddTask: (blockId: string, sectionIdx: number, title: string, taskType?: PlanTask["type"]) => void;
  getNote: (taskId: string) => TaskNote | null;
  setNote: (taskId: string, note: TaskNote) => void;
}

/* ── DeleteConfirmDialog ────────────────────────────────────────── */
interface DeleteConfirmDialogProps {
  taskTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function DeleteConfirmDialog({ taskTitle, onConfirm, onCancel }: DeleteConfirmDialogProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onCancel]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-[8px] border border-[#e2e8f0] shadow-xl max-w-sm w-full mx-4 p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
            <svg className="w-4.5 h-4.5 text-red-600" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 4h10M6 4V3a1 1 0 011-1h2a1 1 0 011 1v1M5 4l1 9h4l1-9" />
            </svg>
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#0f1f3d]">Delete this task?</p>
            <p className="text-[13px] text-[#64748b] mt-1 leading-relaxed line-clamp-2">
              "{taskTitle}"
            </p>
            <p className="text-[13px] text-[#94a3b8] mt-1.5">This cannot be undone.</p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-1.5 text-[13px] font-medium text-[#475569] border border-[#e2e8f0] rounded-[4px] hover:border-[#94a3b8] hover:bg-[#f8fafc] transition-colors focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1.5 text-[13px] font-medium text-white bg-red-500 hover:bg-red-600 rounded-[4px] transition-colors focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Checkbox ──────────────────────────────────────────────────── */
function AcademicCheckbox({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="shrink-0 mt-[3px] w-[15px] h-[15px] flex items-center justify-center transition-colors border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]"
      style={{
        borderRadius: 2,
        background: checked ? "#0066ff" : "white",
        borderColor: checked ? "#0066ff" : "#94a3b8",
      }}
      aria-label={checked ? "Mark incomplete" : "Mark complete"}
    >
      {checked && (
        <svg className="w-[9px] h-[9px] text-white" viewBox="0 0 9 9" fill="none">
          <path d="M1.5 4.5L3.5 6.5L7.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

/* ── TaskRow ─────────────────────────────────────────────────────── */
interface TaskRowProps {
  task: PlanTask;
  completed: boolean;
  onToggle: (id: string) => void;
  blockId: string;
  sectionIdx: number;
  taskActions?: TaskActions;
  sectionTaskIds: string[];
}

function TaskRow({ task, completed, onToggle, blockId, sectionIdx, taskActions, sectionTaskIds }: TaskRowProps) {
  const [hovered, setHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);
  const [showNotes, setShowNotes] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) editInputRef.current?.focus();
  }, [isEditing]);

  // Keep editValue in sync if task title changes externally
  useEffect(() => {
    if (!isEditing) setEditValue(task.title);
  }, [task.title, isEditing]);

  const hasLinks = task.links && task.links.length > 0;
  const singleLinkIsTitle =
    hasLinks && task.links!.length === 1 && task.links![0].text === task.title;

  const taskIdx = sectionTaskIds.indexOf(task.id);
  const isFirst = taskIdx === 0;
  const isLast = taskIdx === sectionTaskIds.length - 1;

  const note = taskActions?.getNote(task.id) ?? null;
  const hasNote = note && (note.text.trim().length > 0 || note.images.length > 0);

  const handleEditSave = () => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== task.title) {
      taskActions?.onEdit(task.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleEditSave();
    if (e.key === "Escape") { setEditValue(task.title); setIsEditing(false); }
  };

  return (
    <>
      {confirmDelete && (
        <DeleteConfirmDialog
          taskTitle={task.title}
          onConfirm={() => { taskActions?.onDelete(task.id); setConfirmDelete(false); }}
          onCancel={() => setConfirmDelete(false)}
        />
      )}

      <div
        className="flex items-start gap-2.5 py-1.5 group/row rounded-[3px] -mx-1 px-1 transition-colors hover:bg-[#eaf5fc]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AcademicCheckbox checked={completed} onToggle={() => onToggle(task.id)} />

        <div className="flex-1 min-w-0">
          {isEditing ? (
            /* ── Inline edit mode ── */
            <div className="flex items-center gap-1.5">
              <input
                ref={editInputRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={handleEditKeyDown}
                onBlur={handleEditSave}
                className="flex-1 text-[16px] text-[#0f1f3d] border border-[#0066ff] rounded-[3px] px-2 py-0.5 focus:outline-none bg-white"
              />
              <button
                onMouseDown={(e) => { e.preventDefault(); handleEditSave(); }}
                className="text-[12px] font-medium text-white bg-[#0066ff] px-2 py-0.5 rounded-[3px] shrink-0 hover:bg-[#004ecc]"
              >
                Save
              </button>
              <button
                onMouseDown={(e) => { e.preventDefault(); setEditValue(task.title); setIsEditing(false); }}
                className="text-[12px] font-medium text-[#64748b] px-2 py-0.5 rounded-[3px] shrink-0 border border-[#e2e8f0] hover:border-[#94a3b8]"
              >
                Cancel
              </button>
            </div>
          ) : singleLinkIsTitle ? (
            <>
              <a
                href={task.links![0].url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`text-[16px] leading-[1.8] break-words ${
                  completed ? "line-through text-[#94a3b8]" : "text-[#0066ff] hover:underline"
                }`}
              >
                {task.title}
              </a>
              {task.optional && (
                <span className="text-[#94a3b8] text-[13px] ml-1">(optional)</span>
              )}
            </>
          ) : (
            <>
              <button onClick={() => onToggle(task.id)} className="w-full text-left focus:outline-none">
                <span
                  className={`text-[16px] leading-[1.8] break-words ${
                    completed ? "line-through text-[#94a3b8]" : "text-[#0f1f3d]"
                  }`}
                >
                  {task.title}
                  {task.optional && (
                    <span className="text-[#94a3b8] text-[14px] ml-1.5">(optional)</span>
                  )}
                </span>
              </button>
              {hasLinks && (
                <div className="mt-0.5 flex flex-col gap-0.5">
                  {task.links!.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[16px] text-[#0066ff] hover:underline leading-[1.8] break-words"
                    >
                      {link.text || link.url}
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Action toolbar ── */}
        {taskActions && !isEditing && (
          <div
            className={`flex items-center gap-0.5 shrink-0 mt-[3px] transition-opacity ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Move up */}
            <button
              onClick={() => taskActions.onMoveUp(blockId, sectionIdx, task.id, sectionTaskIds)}
              disabled={isFirst}
              title="Move up"
              className={`w-6 h-6 flex items-center justify-center rounded-[3px] transition-colors focus:outline-none ${
                isFirst
                  ? "text-[#d1d9e0] cursor-default"
                  : "text-[#64748b] hover:text-[#0f1f3d] hover:bg-[#eaf5fc]"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l4-4 4 4" />
              </svg>
            </button>

            {/* Move down */}
            <button
              onClick={() => taskActions.onMoveDown(blockId, sectionIdx, task.id, sectionTaskIds)}
              disabled={isLast}
              title="Move down"
              className={`w-6 h-6 flex items-center justify-center rounded-[3px] transition-colors focus:outline-none ${
                isLast
                  ? "text-[#d1d9e0] cursor-default"
                  : "text-[#64748b] hover:text-[#0f1f3d] hover:bg-[#eaf5fc]"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5l4 4 4-4" />
              </svg>
            </button>

            {/* Edit */}
            <button
              onClick={() => setIsEditing(true)}
              title="Edit task"
              className="w-6 h-6 flex items-center justify-center rounded-[3px] text-[#64748b] hover:text-[#0f1f3d] hover:bg-[#eaf5fc] transition-colors focus:outline-none"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 2.5l2 2L4 12H2v-2L9.5 2.5z" />
              </svg>
            </button>

            {/* Notes */}
            <button
              onClick={() => setShowNotes((v) => !v)}
              title={showNotes ? "Hide notes" : "Add/view notes"}
              className={`w-6 h-6 flex items-center justify-center rounded-[3px] transition-colors focus:outline-none relative ${
                showNotes || hasNote
                  ? "text-[#0066ff] bg-[#e5f2ff] hover:bg-[#cce0ff]"
                  : "text-[#64748b] hover:text-[#0f1f3d] hover:bg-[#eaf5fc]"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="10" height="10" rx="1.5" />
                <path d="M4 5h6M4 7.5h4" />
              </svg>
              {hasNote && !showNotes && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
              )}
            </button>

            {/* Delete */}
            <button
              onClick={() => setConfirmDelete(true)}
              title="Delete task"
              className="w-6 h-6 flex items-center justify-center rounded-[3px] text-[#94a3b8] hover:text-red-500 hover:bg-red-50 transition-colors focus:outline-none"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 4h9M5.5 4V3a1 1 0 011-1h1a1 1 0 011 1v1M4.5 4l.8 7h3.4l.8-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── Notes panel ── */}
      {showNotes && taskActions && (
        <TaskNotes
          taskId={task.id}
          note={note}
          onSave={(n) => taskActions.setNote(task.id, n)}
        />
      )}
    </>
  );
}

/* ── AddTaskRow ──────────────────────────────────────────────────── */
interface AddTaskRowProps {
  blockId: string;
  sectionIdx: number;
  taskActions: TaskActions;
  defaultType?: PlanTask["type"];
}

function AddTaskRow({ blockId, sectionIdx, taskActions, defaultType = "other" }: AddTaskRowProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleAdd = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    taskActions.onAddTask(blockId, sectionIdx, trimmed, defaultType);
    setValue("");
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
    if (e.key === "Escape") { setValue(""); setOpen(false); }
  };

  if (!open) {
    return (
      <button
        onClick={handleOpen}
        className="flex items-center gap-1.5 mt-1.5 text-[14px] text-[#94a3b8] hover:text-[#0066ff] transition-colors focus:outline-none group"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M7 2v10M2 7h10" />
        </svg>
        Add task
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="New task title…"
        className="flex-1 text-[15px] text-[#0f1f3d] border border-[#0066ff] rounded-[3px] px-2 py-1 focus:outline-none bg-white placeholder-[#94a3b8]"
      />
      <button
        onClick={handleAdd}
        className="text-[13px] font-medium text-white bg-[#0066ff] px-3 py-1 rounded-[3px] shrink-0 hover:bg-[#004ecc] transition-colors"
      >
        Add
      </button>
      <button
        onClick={() => { setValue(""); setOpen(false); }}
        className="text-[13px] text-[#64748b] px-2 py-1 rounded-[3px] shrink-0 border border-[#e2e8f0] hover:border-[#94a3b8] transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}

/* ── SectionGroup ───────────────────────────────────────────────── */
interface SectionGroupProps {
  section: PlanSection;
  visibleTasks: PlanTask[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  isFirst: boolean;
  blockId: string;
  sectionIdx: number;
  taskActions?: TaskActions;
}

function SectionGroup({ section, visibleTasks, completedIds, onToggle, isFirst, blockId, sectionIdx, taskActions }: SectionGroupProps) {
  const required = section.tasks.filter((t) => !t.optional);
  const done = required.filter((t) => completedIds.has(t.id)).length;
  const total = required.length;
  const isDone = total > 0 && done === total;

  if (visibleTasks.length === 0 && !taskActions) return null;
  if (visibleTasks.length === 0 && taskActions) {
    return (
      <div className={!isFirst ? "mt-7 pt-7 border-t border-[#eaf5fc]" : ""}>
        <div className="flex items-center gap-2 mb-3">
          {section.icon && <span className="text-[16px] leading-none">{section.icon}</span>}
          <span className="text-[17px] font-bold text-[#0f1f3d]">{section.category}</span>
        </div>
        <AddTaskRow blockId={blockId} sectionIdx={sectionIdx} taskActions={taskActions} />
      </div>
    );
  }

  const sectionTaskIds = visibleTasks.map((t) => t.id);

  return (
    <div className={!isFirst ? "mt-7 pt-7 border-t border-[#eaf5fc]" : ""}>
      <div className="flex items-center gap-2 mb-3">
        {section.icon && <span className="text-[16px] leading-none">{section.icon}</span>}
        <span className="text-[18px] font-bold text-[#0f1f3d]">{section.category}</span>
        {isDone && (
          <svg className="w-4 h-4 text-emerald-500 ml-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 7l3 3 6-6" />
          </svg>
        )}
        <span className="ml-auto text-[14px] text-[#94a3b8] tabular-nums">{done}/{total}</span>
      </div>
      <div className="flex flex-col">
        {visibleTasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            completed={completedIds.has(task.id)}
            onToggle={onToggle}
            blockId={blockId}
            sectionIdx={sectionIdx}
            taskActions={taskActions}
            sectionTaskIds={sectionTaskIds}
          />
        ))}
      </div>
      {taskActions && (
        <AddTaskRow blockId={blockId} sectionIdx={sectionIdx} taskActions={taskActions} />
      )}
    </div>
  );
}

/* ── ColumnCategory ─────────────────────────────────────────────── */
interface ColumnCategoryProps {
  category: string;
  icon: string;
  tasks: PlanTask[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  isFirst: boolean;
  blockId: string;
  sectionIdx: number;
  taskActions?: TaskActions;
  defaultType?: PlanTask["type"];
}

function ColumnCategory({ category, tasks, completedIds, onToggle, isFirst, blockId, sectionIdx, taskActions, defaultType = "other" }: ColumnCategoryProps) {
  const required = tasks.filter((t) => !t.optional);
  const done = required.filter((t) => completedIds.has(t.id)).length;
  const total = required.length;
  const isDone = total > 0 && done === total;

  if (tasks.length === 0) return null;

  const sectionTaskIds = tasks.map((t) => t.id);

  return (
    <div className={!isFirst ? "mt-5 pt-5 border-t border-[#eaf5fc]" : ""}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[14px] font-semibold text-[#475569] uppercase tracking-wider">
          {category}
        </span>
        {isDone && (
          <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 7l3 3 6-6" />
          </svg>
        )}
        <span className="ml-auto text-[13px] text-[#94a3b8] tabular-nums">{done}/{total}</span>
      </div>
      <div className="flex flex-col">
        {tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            completed={completedIds.has(task.id)}
            onToggle={onToggle}
            blockId={blockId}
            sectionIdx={sectionIdx}
            taskActions={taskActions}
            sectionTaskIds={sectionTaskIds}
          />
        ))}
      </div>
      {taskActions && (
        <AddTaskRow blockId={blockId} sectionIdx={sectionIdx} taskActions={taskActions} defaultType={defaultType} />
      )}
    </div>
  );
}

/* ── Two-column layout types ────────────────────────────────────── */
type CategoryGroup = { category: string; icon: string; tasks: PlanTask[]; sectionIdx: number };

/* ── ColumnsGrid ────────────────────────────────────────────────── */
interface ColumnsGridProps {
  watchGroups: CategoryGroup[];
  doGroups: CategoryGroup[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  blockId: string;
  taskActions?: TaskActions;
}

function ColumnsGrid({ watchGroups, doGroups, completedIds, onToggle, blockId, taskActions }: ColumnsGridProps) {
  const isEmpty = watchGroups.length === 0 && doGroups.length === 0;

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center px-6">
        <p className="text-[15px] text-[#475569] font-medium">No tasks match the current filter.</p>
        <p className="text-[13px] text-[#94a3b8] mt-1">Try selecting "All" to see everything.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#eaf5fc]">
      {/* Left — Things to Watch */}
      <div className="p-6 lg:pr-8">
        <h3 className="text-[21px] font-bold text-[#0f1f3d] mb-5">Things to Watch</h3>
        {watchGroups.length === 0 ? (
          <p className="text-[14px] text-[#94a3b8] italic">No watch tasks for this filter.</p>
        ) : (
          watchGroups.map((group, i) => (
            <ColumnCategory
              key={`watch-${group.category}-${i}`}
              category={group.category}
              icon={group.icon}
              tasks={group.tasks}
              completedIds={completedIds}
              onToggle={onToggle}
              isFirst={i === 0}
              blockId={blockId}
              sectionIdx={group.sectionIdx}
              taskActions={taskActions}
              defaultType="video"
            />
          ))
        )}
      </div>

      {/* Right — Things to Do */}
      <div className="p-6 lg:pl-8">
        <h3 className="text-[21px] font-bold text-[#0f1f3d] mb-5">Things to Do</h3>
        {doGroups.length === 0 ? (
          <p className="text-[14px] text-[#94a3b8] italic">No action tasks for this filter.</p>
        ) : (
          doGroups.map((group, i) => (
            <ColumnCategory
              key={`do-${group.category}-${i}`}
              category={group.category}
              icon={group.icon}
              tasks={group.tasks}
              completedIds={completedIds}
              onToggle={onToggle}
              isFirst={i === 0}
              blockId={blockId}
              sectionIdx={group.sectionIdx}
              taskActions={taskActions}
              defaultType="other"
            />
          ))
        )}
      </div>
    </div>
  );
}

/* ── TwoColumnLayout ────────────────────────────────────────────── */
interface TwoColumnLayoutProps {
  block: PlanBlock;
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  activeFilter: TaskFilter;
  hideCompleted: boolean;
  taskActions?: TaskActions;
}

function TwoColumnLayout({ block, completedIds, onToggle, activeFilter, hideCompleted, taskActions }: TwoColumnLayoutProps) {
  const isCategoryFilter = !["All", "Optional", "Completed", "Incomplete"].includes(activeFilter);

  function applyFilters(tasks: PlanTask[]): PlanTask[] {
    if (isCategoryFilter) return [];
    let result = tasks;
    switch (activeFilter) {
      case "Optional":   result = tasks.filter((t) => t.optional); break;
      case "Completed":  result = tasks.filter((t) => completedIds.has(t.id)); break;
      case "Incomplete": result = tasks.filter((t) => !completedIds.has(t.id)); break;
    }
    if (hideCompleted) result = result.filter((t) => !completedIds.has(t.id));
    return result;
  }

  if (isCategoryFilter) {
    const catSections = block.sections
      .map((s, idx) => ({ s, idx }))
      .filter(({ s }) => s.category === activeFilter);
    if (catSections.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-10 text-center px-6">
          <p className="text-[15px] text-[#475569] font-medium">No tasks match "{activeFilter}"</p>
          <p className="text-[13px] text-[#94a3b8] mt-1">Try a different filter</p>
        </div>
      );
    }
    const filteredWatch: CategoryGroup[] = [];
    const filteredDo: CategoryGroup[] = [];
    for (const { s, idx } of catSections) {
      const watch = s.tasks.filter((t) => t.type === "video" && (!hideCompleted || !completedIds.has(t.id)));
      const doT   = s.tasks.filter((t) => t.type !== "video" && (!hideCompleted || !completedIds.has(t.id)));
      if (watch.length > 0) filteredWatch.push({ category: s.category, icon: s.icon, tasks: watch, sectionIdx: idx });
      if (doT.length > 0)   filteredDo.push({ category: s.category, icon: s.icon, tasks: doT, sectionIdx: idx });
    }
    return (
      <ColumnsGrid
        watchGroups={filteredWatch}
        doGroups={filteredDo}
        completedIds={completedIds}
        onToggle={onToggle}
        blockId={block.id}
        taskActions={taskActions}
      />
    );
  }

  const watchMap = new Map<string, CategoryGroup>();
  const doMap    = new Map<string, CategoryGroup>();

  block.sections.forEach((section, sIdx) => {
    const watchTasks = applyFilters(section.tasks.filter((t) => t.type === "video"));
    const doTasks    = applyFilters(section.tasks.filter((t) => t.type !== "video"));
    if (watchTasks.length > 0) {
      if (!watchMap.has(section.category)) watchMap.set(section.category, { category: section.category, icon: section.icon, tasks: [], sectionIdx: sIdx });
      watchMap.get(section.category)!.tasks.push(...watchTasks);
    }
    if (doTasks.length > 0) {
      if (!doMap.has(section.category)) doMap.set(section.category, { category: section.category, icon: section.icon, tasks: [], sectionIdx: sIdx });
      doMap.get(section.category)!.tasks.push(...doTasks);
    }
  });

  return (
    <ColumnsGrid
      watchGroups={Array.from(watchMap.values())}
      doGroups={Array.from(doMap.values())}
      completedIds={completedIds}
      onToggle={onToggle}
      blockId={block.id}
      taskActions={taskActions}
    />
  );
}

/* ── Filter logic ───────────────────────────────────────────────── */
function filterTasks(tasks: PlanTask[], filter: TaskFilter, completedIds: Set<string>): PlanTask[] {
  switch (filter) {
    case "All":        return tasks;
    case "Optional":   return tasks.filter((t) => t.optional);
    case "Completed":  return tasks.filter((t) => completedIds.has(t.id));
    case "Incomplete": return tasks.filter((t) => !completedIds.has(t.id));
    default:           return tasks;
  }
}

/* ── findNextIncompleteBlock ────────────────────────────────────── */
function findNextIncompleteBlock(
  plan: PlanBlock[],
  currentBlockId: string,
  completedIds: Set<string>
): PlanBlock | null {
  const isIncomplete = (block: PlanBlock) => {
    const required = block.sections.flatMap((s) => s.tasks).filter((t) => !t.optional);
    return required.length > 0 && required.some((t) => !completedIds.has(t.id));
  };
  const currentIdx = plan.findIndex((b) => b.id === currentBlockId);
  return [...plan.slice(currentIdx + 1), ...plan.slice(0, currentIdx)].find(isIncomplete) ?? null;
}

/* ── DayCompleteCard ────────────────────────────────────────────── */
interface DayCompleteCardProps {
  blockTitle: string;
  nextBlock: PlanBlock | null;
  onNavigate: (id: string) => void;
}

function DayCompleteCard({ blockTitle, nextBlock, onNavigate }: DayCompleteCardProps) {
  const isFullPlanDone = nextBlock === null;

  return (
    <div className="mx-6 mt-5 mb-1 border border-[#bbf7d0] bg-[#f0fdf4] rounded-[6px] px-4 py-3.5 flex items-center gap-3">
      <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 8l4 4 7-7" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        {isFullPlanDone ? (
          <>
            <p className="text-[15px] font-bold text-emerald-700">Full Plan Complete!</p>
            <p className="text-[14px] text-emerald-600/80 mt-0.5">You finished the complete PrepFlow plan.</p>
          </>
        ) : (
          <>
            <p className="text-[14px] font-bold text-emerald-700">Day Complete!</p>
            <p className="text-[13px] text-[#475569] mt-0.5 truncate">
              Next: <span className="font-medium text-[#0f1f3d]">{nextBlock!.title}</span>
            </p>
          </>
        )}
      </div>
      {!isFullPlanDone && (
        <button
          onClick={() => onNavigate(nextBlock!.id)}
          className="shrink-0 text-[13px] font-semibold text-white bg-[#0066ff] hover:bg-[#004ecc] px-3 py-1.5 rounded-[4px] transition-colors focus:outline-none"
        >
          Next →
        </button>
      )}
    </div>
  );
}

/* ── TaskArea ──────────────────────────────────────────────────── */
interface TaskAreaProps {
  block: PlanBlock | null;
  plan: PlanBlock[];
  completedIds: Set<string>;
  onToggleTask: (taskId: string) => void;
  onNavigateTo: (blockId: string) => void;
  activeFilter: TaskFilter;
  embedded?: boolean;
  taskActions?: TaskActions;
}

export default function TaskArea({
  block,
  plan,
  completedIds,
  onToggleTask,
  onNavigateTo,
  activeFilter,
  embedded = false,
  taskActions,
}: TaskAreaProps) {
  const [hideCompleted, setHideCompleted] = useState(false);
  const effectiveHide = hideCompleted;

  if (!block) {
    if (embedded) return null;
    return (
      <div className="flex items-center justify-center py-20 text-center px-6">
        <div>
          <p className="text-[15px] font-medium text-[#475569]">Select a day to get started.</p>
          <p className="text-[13px] text-[#94a3b8] mt-1">Choose a week tab and expand a day.</p>
        </div>
      </div>
    );
  }

  const allRequired    = block.sections.flatMap((s) => s.tasks.filter((t) => !t.optional));
  const completedCount = allRequired.filter((t) => completedIds.has(t.id)).length;
  const totalCount     = allRequired.length;
  const pct            = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const blockDone      = totalCount > 0 && pct === 100;
  const isCategoryFilter = !["All", "Optional", "Completed", "Incomplete"].includes(activeFilter);
  const isDayBlock     = block.type === "day";

  const visibleSections = block.sections
    .map((section, sIdx) => {
      if (isCategoryFilter && section.category !== activeFilter) {
        return { section, visibleTasks: [] as PlanTask[], sIdx };
      }
      let tasks = filterTasks(section.tasks, activeFilter, completedIds);
      if (effectiveHide) tasks = tasks.filter((t) => !completedIds.has(t.id));
      return { section, visibleTasks: tasks, sIdx };
    })
    .filter(({ visibleTasks }) => visibleTasks.length > 0);

  const allBlockTasksHidden =
    effectiveHide && block.sections.flatMap((s) => s.tasks).every((t) => completedIds.has(t.id));

  const nextIncompleteBlock = blockDone
    ? findNextIncompleteBlock(plan, block.id, completedIds)
    : null;

  /* ── Embedded mode ─────────────────────────────────────────── */
  if (embedded) {
    const allHidden =
      block.sections.flatMap((s) => s.tasks).length > 0 &&
      isCategoryFilter &&
      block.sections.every((s) => s.category !== activeFilter);

    const allCompletedHidden =
      hideCompleted &&
      block.sections.flatMap((s) => s.tasks).every((t) => completedIds.has(t.id));

    return (
      <div>
        {blockDone && (
          <DayCompleteCard
            blockTitle={block.title}
            nextBlock={nextIncompleteBlock}
            onNavigate={onNavigateTo}
          />
        )}

        {/* Hide completed toggle */}
        <div className="flex justify-end px-5 pt-3 pb-1">
          <button
            onClick={() => setHideCompleted((v) => !v)}
            className={`text-[12px] font-medium px-2.5 py-1 rounded-full border transition-colors focus:outline-none ${
              hideCompleted
                ? "bg-[#0066ff] text-white border-[#0066ff]"
                : "text-[#94a3b8] border-[#e2e8f0] hover:border-[#94a3b8] hover:text-[#475569]"
            }`}
          >
            {hideCompleted ? "Show all" : "Hide completed"}
          </button>
        </div>

        {allHidden ? (
          <div className="px-6 py-8 text-center">
            <p className="text-[15px] text-[#475569] font-medium">No tasks match "{activeFilter}"</p>
            <p className="text-[13px] text-[#94a3b8] mt-1">Try a different filter.</p>
          </div>
        ) : allCompletedHidden ? (
          <div className="px-6 py-8 text-center">
            <p className="text-[15px] text-[#475569] font-medium">All tasks completed.</p>
            <p className="text-[13px] text-[#94a3b8] mt-1">
              Click{" "}
              <button onClick={() => setHideCompleted(false)} className="text-[#0066ff] hover:underline focus:outline-none">
                Show all
              </button>{" "}
              to review them.
            </p>
          </div>
        ) : isDayBlock ? (
          <TwoColumnLayout
            block={block}
            completedIds={completedIds}
            onToggle={onToggleTask}
            activeFilter={activeFilter}
            hideCompleted={hideCompleted}
            taskActions={taskActions}
          />
        ) : (
          visibleSections.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <p className="text-[15px] text-[#475569] font-medium">No tasks match "{activeFilter}"</p>
              <p className="text-[13px] text-[#94a3b8] mt-1">Try a different filter.</p>
            </div>
          ) : (
            <div className="px-6 py-5">
              {visibleSections.map(({ section, visibleTasks, sIdx }, i) => (
                <SectionGroup
                  key={sIdx}
                  section={section}
                  visibleTasks={visibleTasks}
                  completedIds={completedIds}
                  onToggle={onToggleTask}
                  isFirst={i === 0}
                  blockId={block.id}
                  sectionIdx={sIdx}
                  taskActions={taskActions}
                />
              ))}
            </div>
          )
        )}
      </div>
    );
  }

  /* ── Standalone mode ───────────────────────────────────────── */
  return (
    <div className="px-5 lg:px-6 pb-6">
      <div className="bg-white rounded-[8px] border border-[#e2e8f0] overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-[#eaf5fc]">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-[18px] font-bold text-[#0f1f3d] leading-snug break-words">{block.title}</h2>
              <p className="text-[13px] text-[#94a3b8] mt-1 tabular-nums">
                {completedCount} of {totalCount} required tasks completed
              </p>
            </div>
            <span className={`text-[28px] font-bold tabular-nums leading-none shrink-0 ${blockDone ? "text-emerald-600" : "text-[#0066ff]"}`}>
              {pct}%
            </span>
          </div>

          <div className="mt-3 h-1.5 w-full rounded-full bg-[#eaf5fc] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${blockDone ? "bg-emerald-500" : "bg-[#0066ff]"}`}
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex items-center justify-end mt-3">
            <button
              onClick={() => setHideCompleted((v) => !v)}
              className={`text-[13px] font-medium px-3 py-1 rounded-full border transition-colors focus:outline-none ${
                hideCompleted
                  ? "bg-[#0066ff] text-white border-[#0066ff]"
                  : "text-[#64748b] border-[#e2e8f0] hover:border-[#94a3b8]"
              }`}
            >
              {hideCompleted ? "Show all" : "Hide completed"}
            </button>
          </div>
        </div>

        {blockDone && (
          <DayCompleteCard
            blockTitle={block.title}
            nextBlock={nextIncompleteBlock}
            onNavigate={onNavigateTo}
          />
        )}

        {isDayBlock ? (
          allBlockTasksHidden ? (
            <div className="px-6 py-10 text-center">
              <p className="text-[15px] text-[#475569] font-medium">All tasks completed.</p>
              <p className="text-[13px] text-[#94a3b8] mt-1">Click "Show all" to review them.</p>
            </div>
          ) : (
            <TwoColumnLayout
              block={block}
              completedIds={completedIds}
              onToggle={onToggleTask}
              activeFilter={activeFilter}
              hideCompleted={hideCompleted}
              taskActions={taskActions}
            />
          )
        ) : (
          allBlockTasksHidden ? (
            <div className="px-6 py-10 text-center">
              <p className="text-[15px] text-[#475569] font-medium">All tasks completed.</p>
              <p className="text-[13px] text-[#94a3b8] mt-1">Click "Show all" to review them.</p>
            </div>
          ) : visibleSections.length === 0 ? (
            <div className="px-6 py-10 text-center">
              <p className="text-[15px] text-[#475569] font-medium">No tasks match "{activeFilter}"</p>
              <p className="text-[13px] text-[#94a3b8] mt-1">Try a different filter.</p>
            </div>
          ) : (
            <div className="px-5 py-5">
              {visibleSections.map(({ section, visibleTasks, sIdx }, i) => (
                <SectionGroup
                  key={sIdx}
                  section={section}
                  visibleTasks={visibleTasks}
                  completedIds={completedIds}
                  onToggle={onToggleTask}
                  isFirst={i === 0}
                  blockId={block.id}
                  sectionIdx={sIdx}
                  taskActions={taskActions}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
