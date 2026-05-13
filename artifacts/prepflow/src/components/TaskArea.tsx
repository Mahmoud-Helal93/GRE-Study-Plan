import { useState } from "react";
import { PlanBlock, PlanTask, PlanSection } from "../data/prepFlowPlan";
import { type TaskFilter } from "../lib/filters";

/* ── Checkbox ──────────────────────────────────────────────── */
function AcademicCheckbox({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="shrink-0 mt-[3px] w-[15px] h-[15px] flex items-center justify-center transition-colors border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff]"
      style={{
        borderRadius: 2,
        background: checked ? "#2f6bff" : "white",
        borderColor: checked ? "#2f6bff" : "#94a3b8",
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

/* ── TaskRow — academic clean list item ─────────────────────── */
interface TaskRowProps {
  task: PlanTask;
  completed: boolean;
  onToggle: (id: string) => void;
}

function TaskRow({ task, completed, onToggle }: TaskRowProps) {
  const hasLinks = task.links && task.links.length > 0;
  const singleLinkIsTitle =
    hasLinks && task.links!.length === 1 && task.links![0].text === task.title;

  return (
    <div className="flex items-start gap-2.5 py-1.5">
      <AcademicCheckbox checked={completed} onToggle={() => onToggle(task.id)} />

      <div className="flex-1 min-w-0">
        {singleLinkIsTitle ? (
          <>
            <a
              href={task.links![0].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`text-[15px] leading-[1.8] break-words ${
                completed ? "line-through text-[#94a3b8]" : "text-[#1a6edf] hover:underline"
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
                className={`text-[15px] leading-[1.8] break-words ${
                  completed ? "line-through text-[#94a3b8]" : "text-[#172033]"
                }`}
              >
                {task.title}
                {task.optional && (
                  <span className="text-[#94a3b8] text-[13px] ml-1.5">(optional)</span>
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
                    className="text-[15px] text-[#1a6edf] hover:underline leading-[1.8] break-words"
                  >
                    {link.text || link.url}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ── SectionGroup — for setup/practice-test blocks ─────────── */
interface SectionGroupProps {
  section: PlanSection;
  visibleTasks: PlanTask[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  isFirst: boolean;
}

function SectionGroup({ section, visibleTasks, completedIds, onToggle, isFirst }: SectionGroupProps) {
  const required = section.tasks.filter((t) => !t.optional);
  const done = required.filter((t) => completedIds.has(t.id)).length;
  const total = required.length;
  const isDone = total > 0 && done === total;

  if (visibleTasks.length === 0) return null;

  return (
    <div className={!isFirst ? "mt-7 pt-7 border-t border-[#e8f1f9]" : ""}>
      <div className="flex items-center gap-2 mb-3">
        {section.icon && <span className="text-[16px] leading-none">{section.icon}</span>}
        <span className="text-[17px] font-bold text-[#172033]">{section.category}</span>
        {isDone && (
          <svg className="w-4 h-4 text-emerald-500 ml-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 7l3 3 6-6" />
          </svg>
        )}
        <span className="ml-auto text-[13px] text-[#94a3b8] tabular-nums">{done}/{total}</span>
      </div>
      <div className="flex flex-col">
        {visibleTasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            completed={completedIds.has(task.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

/* ── ColumnCategory — used inside two-column layout ─────────── */
interface ColumnCategoryProps {
  category: string;
  icon: string;
  tasks: PlanTask[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  isFirst: boolean;
}

function ColumnCategory({ category, tasks, completedIds, onToggle, isFirst }: ColumnCategoryProps) {
  const required = tasks.filter((t) => !t.optional);
  const done = required.filter((t) => completedIds.has(t.id)).length;
  const total = required.length;
  const isDone = total > 0 && done === total;

  if (tasks.length === 0) return null;

  return (
    <div className={!isFirst ? "mt-5 pt-5 border-t border-[#e8f1f9]" : ""}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[13px] font-semibold text-[#475569] uppercase tracking-wider">
          {category}
        </span>
        {isDone && (
          <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 7l3 3 6-6" />
          </svg>
        )}
        <span className="ml-auto text-[12px] text-[#94a3b8] tabular-nums">{done}/{total}</span>
      </div>
      <div className="flex flex-col">
        {tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            completed={completedIds.has(task.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Two-column layout types ────────────────────────────────── */
type CategoryGroup = { category: string; icon: string; tasks: PlanTask[] };

/* ── ColumnsGrid ────────────────────────────────────────────── */
interface ColumnsGridProps {
  watchGroups: CategoryGroup[];
  doGroups: CategoryGroup[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
}

function ColumnsGrid({ watchGroups, doGroups, completedIds, onToggle }: ColumnsGridProps) {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#e8f1f9]">
      {/* Left — Things to Watch */}
      <div className="p-6 lg:pr-8">
        <h3 className="text-[20px] font-bold text-[#172033] mb-5">Things to Watch</h3>
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
            />
          ))
        )}
      </div>

      {/* Right — Things to Do */}
      <div className="p-6 lg:pl-8">
        <h3 className="text-[20px] font-bold text-[#172033] mb-5">Things to Do</h3>
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
            />
          ))
        )}
      </div>
    </div>
  );
}

/* ── TwoColumnLayout ────────────────────────────────────────── */
interface TwoColumnLayoutProps {
  block: PlanBlock;
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  activeFilter: TaskFilter;
  hideCompleted: boolean;
}

function TwoColumnLayout({ block, completedIds, onToggle, activeFilter, hideCompleted }: TwoColumnLayoutProps) {
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
    const catSections = block.sections.filter((s) => s.category === activeFilter);
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
    for (const s of catSections) {
      const watch = s.tasks.filter((t) => t.type === "video" && (!hideCompleted || !completedIds.has(t.id)));
      const doT   = s.tasks.filter((t) => t.type !== "video" && (!hideCompleted || !completedIds.has(t.id)));
      if (watch.length > 0) filteredWatch.push({ category: s.category, icon: s.icon, tasks: watch });
      if (doT.length > 0)   filteredDo.push({ category: s.category, icon: s.icon, tasks: doT });
    }
    return <ColumnsGrid watchGroups={filteredWatch} doGroups={filteredDo} completedIds={completedIds} onToggle={onToggle} />;
  }

  const watchMap = new Map<string, CategoryGroup>();
  const doMap    = new Map<string, CategoryGroup>();

  for (const section of block.sections) {
    const watchTasks = applyFilters(section.tasks.filter((t) => t.type === "video"));
    const doTasks    = applyFilters(section.tasks.filter((t) => t.type !== "video"));
    if (watchTasks.length > 0) {
      if (!watchMap.has(section.category)) watchMap.set(section.category, { category: section.category, icon: section.icon, tasks: [] });
      watchMap.get(section.category)!.tasks.push(...watchTasks);
    }
    if (doTasks.length > 0) {
      if (!doMap.has(section.category)) doMap.set(section.category, { category: section.category, icon: section.icon, tasks: [] });
      doMap.get(section.category)!.tasks.push(...doTasks);
    }
  }

  return (
    <ColumnsGrid
      watchGroups={Array.from(watchMap.values())}
      doGroups={Array.from(doMap.values())}
      completedIds={completedIds}
      onToggle={onToggle}
    />
  );
}

/* ── Filter logic ───────────────────────────────────────────── */
function filterTasks(tasks: PlanTask[], filter: TaskFilter, completedIds: Set<string>): PlanTask[] {
  switch (filter) {
    case "All":        return tasks;
    case "Optional":   return tasks.filter((t) => t.optional);
    case "Completed":  return tasks.filter((t) => completedIds.has(t.id));
    case "Incomplete": return tasks.filter((t) => !completedIds.has(t.id));
    default:           return tasks;
  }
}

/* ── findNextIncompleteBlock ────────────────────────────────── */
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

/* ── DayCompleteCard ────────────────────────────────────────── */
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
            <p className="text-[14px] font-bold text-emerald-700">Full Plan Complete!</p>
            <p className="text-[13px] text-emerald-600/80 mt-0.5">You finished the complete PrepFlow plan.</p>
          </>
        ) : (
          <>
            <p className="text-[14px] font-bold text-emerald-700">Day Complete!</p>
            <p className="text-[13px] text-[#475569] mt-0.5 truncate">
              Next: <span className="font-medium text-[#172033]">{nextBlock!.title}</span>
            </p>
          </>
        )}
      </div>
      {!isFullPlanDone && (
        <button
          onClick={() => onNavigate(nextBlock!.id)}
          className="shrink-0 text-[13px] font-semibold text-white bg-[#2f6bff] hover:bg-[#2560ee] px-3 py-1.5 rounded-[4px] transition-colors focus:outline-none"
        >
          Next →
        </button>
      )}
    </div>
  );
}

/* ── TaskArea ──────────────────────────────────────────────── */
interface TaskAreaProps {
  block: PlanBlock | null;
  plan: PlanBlock[];
  completedIds: Set<string>;
  onToggleTask: (taskId: string) => void;
  onNavigateTo: (blockId: string) => void;
  activeFilter: TaskFilter;
  embedded?: boolean;
}

export default function TaskArea({
  block,
  plan,
  completedIds,
  onToggleTask,
  onNavigateTo,
  activeFilter,
  embedded = false,
}: TaskAreaProps) {
  const [hideCompleted, setHideCompleted] = useState(false);
  const effectiveHide = embedded ? false : hideCompleted;

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

  const allRequired   = block.sections.flatMap((s) => s.tasks.filter((t) => !t.optional));
  const completedCount = allRequired.filter((t) => completedIds.has(t.id)).length;
  const totalCount    = allRequired.length;
  const pct           = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const blockDone     = totalCount > 0 && pct === 100;
  const isCategoryFilter = !["All", "Optional", "Completed", "Incomplete"].includes(activeFilter);
  const isDayBlock    = block.type === "day";

  const visibleSections = block.sections
    .map((section) => {
      if (isCategoryFilter && section.category !== activeFilter) {
        return { section, visibleTasks: [] as PlanTask[] };
      }
      let tasks = filterTasks(section.tasks, activeFilter, completedIds);
      if (effectiveHide) tasks = tasks.filter((t) => !completedIds.has(t.id));
      return { section, visibleTasks: tasks };
    })
    .filter(({ visibleTasks }) => visibleTasks.length > 0);

  const allBlockTasksHidden =
    effectiveHide && block.sections.flatMap((s) => s.tasks).every((t) => completedIds.has(t.id));

  const nextIncompleteBlock = blockDone
    ? findNextIncompleteBlock(plan, block.id, completedIds)
    : null;

  /* ── Embedded mode: no outer chrome ─────────────────────── */
  if (embedded) {
    const allHidden =
      block.sections.flatMap((s) => s.tasks).length > 0 &&
      isCategoryFilter &&
      block.sections.every((s) => s.category !== activeFilter);

    return (
      <div>
        {blockDone && (
          <DayCompleteCard
            blockTitle={block.title}
            nextBlock={nextIncompleteBlock}
            onNavigate={onNavigateTo}
          />
        )}
        {allHidden ? (
          <div className="px-6 py-8 text-center">
            <p className="text-[15px] text-[#475569] font-medium">No tasks match "{activeFilter}"</p>
            <p className="text-[13px] text-[#94a3b8] mt-1">Try a different filter.</p>
          </div>
        ) : isDayBlock ? (
          <TwoColumnLayout
            block={block}
            completedIds={completedIds}
            onToggle={onToggleTask}
            activeFilter={activeFilter}
            hideCompleted={false}
          />
        ) : (
          visibleSections.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <p className="text-[15px] text-[#475569] font-medium">No tasks match "{activeFilter}"</p>
              <p className="text-[13px] text-[#94a3b8] mt-1">Try a different filter.</p>
            </div>
          ) : (
            <div className="px-6 py-5">
              {visibleSections.map(({ section, visibleTasks }, i) => (
                <SectionGroup
                  key={i}
                  section={section}
                  visibleTasks={visibleTasks}
                  completedIds={completedIds}
                  onToggle={onToggleTask}
                  isFirst={i === 0}
                />
              ))}
            </div>
          )
        )}
      </div>
    );
  }

  /* ── Standalone mode: full panel chrome ─────────────────── */
  return (
    <div className="px-5 lg:px-6 pb-6">
      <div className="bg-white rounded-[8px] border border-[#e2e8f0] overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-[#e8f1f9]">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-[18px] font-bold text-[#172033] leading-snug break-words">{block.title}</h2>
              <p className="text-[13px] text-[#94a3b8] mt-1 tabular-nums">
                {completedCount} of {totalCount} required tasks completed
              </p>
            </div>
            <span className={`text-[28px] font-bold tabular-nums leading-none shrink-0 ${blockDone ? "text-emerald-600" : "text-[#2f6bff]"}`}>
              {pct}%
            </span>
          </div>

          <div className="mt-3 h-1.5 w-full rounded-full bg-[#e8f1f9] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${blockDone ? "bg-emerald-500" : "bg-[#2f6bff]"}`}
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex items-center justify-end mt-3">
            <button
              onClick={() => setHideCompleted((v) => !v)}
              className={`text-[13px] font-medium px-3 py-1 rounded-full border transition-colors focus:outline-none ${
                hideCompleted
                  ? "bg-[#2f6bff] text-white border-[#2f6bff]"
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
              {visibleSections.map(({ section, visibleTasks }, i) => (
                <SectionGroup
                  key={i}
                  section={section}
                  visibleTasks={visibleTasks}
                  completedIds={completedIds}
                  onToggle={onToggleTask}
                  isFirst={i === 0}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
