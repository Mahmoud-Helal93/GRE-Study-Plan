import { useState } from "react";
import { PlanBlock, PlanTask, PlanSection } from "../data/prepFlowPlan";
import { getCategoryColor } from "../data/categoryColors";
import { type TaskFilter } from "../lib/filters";

/* ── Badge detection ───────────────────────────────────────── */
interface Badge {
  label: string;
  className: string;
}

const TYPE_BADGE: Record<string, Badge> = {
  video:    { label: "VIDEO",    className: "bg-rose-50    text-rose-600    border-rose-100" },
  practice: { label: "PRACTICE", className: "bg-orange-50  text-orange-600  border-orange-100" },
  review:   { label: "REVIEW",   className: "bg-sky-50     text-sky-600     border-sky-100" },
  quiz:     { label: "QUIZ",     className: "bg-purple-50  text-purple-600  border-purple-100" },
  reading:  { label: "READING",  className: "bg-teal-50    text-teal-600    border-teal-100" },
  writing:  { label: "WRITING",  className: "bg-amber-50   text-amber-600   border-amber-100" },
  test:     { label: "TEST",     className: "bg-violet-50  text-violet-700  border-violet-100" },
  setup:    { label: "SETUP",    className: "bg-slate-50   text-slate-500   border-slate-100" },
};

function getBadge(task: PlanTask): Badge | null {
  const t = task.title.toLowerCase();
  if (t.startsWith("watch"))                          return TYPE_BADGE.video;
  if (t.includes("quiz"))                             return TYPE_BADGE.quiz;
  if (t.includes("review") || t.includes("revise"))  return TYPE_BADGE.review;
  if (t.includes("practice"))                         return TYPE_BADGE.practice;
  return TYPE_BADGE[task.type] ?? null;
}

/* ── Checkbox ──────────────────────────────────────────────── */
function Checkbox({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      aria-label={checked ? "Mark incomplete" : "Mark complete"}
    >
      <div
        className={`flex items-center justify-center transition-all duration-150 ${
          checked
            ? "bg-violet-600"
            : "bg-white border-2 border-gray-300 hover:border-violet-400"
        }`}
        style={{ width: 20, height: 20, borderRadius: 6 }}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

/* ── TaskRow ───────────────────────────────────────────────── */
interface TaskRowProps {
  task: PlanTask;
  completed: boolean;
  onToggle: (id: string) => void;
}

function TaskRow({ task, completed, onToggle }: TaskRowProps) {
  const badge = getBadge(task);
  const hasLinks = task.links && task.links.length > 0;

  return (
    <div
      className={`flex items-start gap-3 rounded-xl px-4 py-3 border transition-all duration-150 ${
        completed
          ? "bg-slate-50/80 border-gray-100"
          : "bg-white border-gray-100 hover:border-violet-200 hover:shadow-[0_1px_6px_0_rgba(109,40,217,0.07)]"
      }`}
    >
      <div className="mt-[2px]">
        <Checkbox checked={completed} onToggle={() => onToggle(task.id)} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <button
            onClick={() => onToggle(task.id)}
            className="flex-1 min-w-0 text-left focus:outline-none"
          >
            <span
              className={`text-[15px] leading-relaxed break-words font-medium block ${
                completed ? "line-through text-slate-400" : "text-slate-700"
              }`}
            >
              {task.title}
            </span>
          </button>

          {badge && (
            <span
              className={`shrink-0 mt-1 inline-flex items-center text-[10px] font-bold uppercase tracking-wider border rounded-md px-1.5 py-0.5 ${badge.className}`}
            >
              {badge.label}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
          {task.optional && (
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-100 rounded-md px-1.5 py-0.5">
              Optional
            </span>
          )}
          {hasLinks && task.links!.map((link, i) => {
            const displayText = link.text || "Open Resource";
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 hover:text-violet-900 bg-violet-50 hover:bg-violet-100 border border-violet-100 hover:border-violet-200 rounded-lg px-2 py-1 transition-all duration-100 no-underline"
              >
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7" />
                  <path d="M8 1h3v3" /><path d="M11 1L5.5 6.5" />
                </svg>
                <span className="max-w-[200px] truncate">{displayText}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── SectionGroup ──────────────────────────────────────────── */
interface SectionGroupProps {
  section: PlanSection;
  visibleTasks: PlanTask[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  isFirst: boolean;
}

function SectionGroup({ section, visibleTasks, completedIds, onToggle, isFirst }: SectionGroupProps) {
  const colors = getCategoryColor(section.category);
  const required = section.tasks.filter((t) => !t.optional);
  const done = required.filter((t) => completedIds.has(t.id)).length;
  const total = required.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const isDone = total > 0 && done === total;

  if (visibleTasks.length === 0) return null;

  return (
    <div className={!isFirst ? "border-t border-gray-100" : ""}>
      <div className="flex items-center gap-2.5 px-5 py-3 bg-slate-50/70">
        <span className="text-base leading-none">{section.icon}</span>
        <span className={`text-xs font-bold uppercase tracking-[0.12em] px-2 py-1 rounded-md ${colors.bg} ${colors.text}`}>
          {section.category}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className={`text-xs font-semibold tabular-nums ${isDone ? "text-emerald-600" : "text-slate-400"}`}>
            {done}/{total}
          </span>
          {isDone && (
            <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6l3 3 5-5" />
            </svg>
          )}
        </div>
      </div>

      {total > 0 && (
        <div className="h-[2px] w-full bg-gray-100 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${isDone ? "bg-emerald-500" : "bg-violet-500"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      )}

      <div className="px-4 py-3 flex flex-col gap-2">
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

/* ── Filter logic ──────────────────────────────────────────── */
function filterTasks(tasks: PlanTask[], filter: TaskFilter, completedIds: Set<string>): PlanTask[] {
  switch (filter) {
    case "All":        return tasks;
    case "Optional":   return tasks.filter((t) => t.optional);
    case "Completed":  return tasks.filter((t) => completedIds.has(t.id));
    case "Incomplete": return tasks.filter((t) => !completedIds.has(t.id));
    default:           return tasks;
  }
}

/* ── Next incomplete block (after current first, then wrap) ── */
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
  const afterCurrent = plan.slice(currentIdx + 1);
  const beforeCurrent = plan.slice(0, currentIdx);
  return [...afterCurrent, ...beforeCurrent].find(isIncomplete) ?? null;
}

/* ── DayCompleteCard ───────────────────────────────────────── */
interface DayCompleteCardProps {
  blockTitle: string;
  nextBlock: PlanBlock | null;
  onNavigate: (id: string) => void;
}

function DayCompleteCard({ blockTitle, nextBlock, onNavigate }: DayCompleteCardProps) {
  const isFullPlanDone = nextBlock === null;

  return (
    <div className="mx-4 mt-4 mb-1 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-violet-50 px-4 py-3.5 flex items-center gap-3">
      {/* Icon */}
      <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10l4 4 8-8" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        {isFullPlanDone ? (
          <>
            <p className="text-sm font-bold text-emerald-700 leading-snug">Full Plan Complete 🎉</p>
            <p className="text-xs text-emerald-600/80 mt-0.5 leading-snug">
              You finished the full PrepFlow plan.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-bold text-emerald-700 leading-snug">Day Complete 🎉</p>
            <p className="text-xs text-slate-500 mt-0.5 leading-snug truncate">
              You finished <span className="font-semibold text-slate-600">{blockTitle}</span>.
            </p>
            <p className="text-xs text-slate-400 mt-0.5 leading-snug truncate">
              Next: <span className="font-medium text-slate-500">{nextBlock.title}</span>
            </p>
          </>
        )}
      </div>

      {/* Button */}
      {!isFullPlanDone && (
        <button
          onClick={() => onNavigate(nextBlock.id)}
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 px-3 py-1.5 rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          Go to Next
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6h8M7 3l3 3-3 3" />
          </svg>
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
}

export default function TaskArea({
  block,
  plan,
  completedIds,
  onToggleTask,
  onNavigateTo,
  activeFilter,
}: TaskAreaProps) {
  const [hideCompleted, setHideCompleted] = useState(false);

  if (!block) {
    return (
      <div className="px-5 lg:px-6 pb-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_4px_0_rgba(0,0,0,0.04)] flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-500">Select a block from the left panel</p>
            <p className="text-xs text-slate-400 mt-1">Choose a week and day to get started</p>
          </div>
        </div>
      </div>
    );
  }

  const allRequired = block.sections.flatMap((s) => s.tasks.filter((t) => !t.optional));
  const completedCount = allRequired.filter((t) => completedIds.has(t.id)).length;
  const totalCount = allRequired.length;
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const blockDone = totalCount > 0 && pct === 100;

  const isCategoryFilter = !["All", "Optional", "Completed", "Incomplete"].includes(activeFilter);

  const visibleSections = block.sections
    .map((section) => {
      if (isCategoryFilter && section.category !== activeFilter) {
        return { section, visibleTasks: [] as PlanTask[] };
      }
      let visibleTasks = filterTasks(section.tasks, activeFilter, completedIds);
      if (hideCompleted) {
        visibleTasks = visibleTasks.filter((t) => !completedIds.has(t.id));
      }
      return { section, visibleTasks };
    })
    .filter(({ visibleTasks }) => visibleTasks.length > 0);

  const isFiltered = activeFilter !== "All";
  const visibleCount = visibleSections.reduce((n, { visibleTasks }) => n + visibleTasks.length, 0);

  const allBlockTasksHidden =
    hideCompleted &&
    block.sections.flatMap((s) => s.tasks).every((t) => completedIds.has(t.id));

  const nextIncompleteBlock = blockDone
    ? findNextIncompleteBlock(plan, block.id, completedIds)
    : null;

  return (
    <div className="px-5 lg:px-6 pb-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_4px_0_rgba(0,0,0,0.04)] overflow-hidden">

        {/* ── Panel header ── */}
        <div className="px-5 pt-4 pb-3.5 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-slate-900 leading-snug tracking-tight break-words">
                {block.title}
              </h2>
              <p className="text-xs text-slate-400 font-medium mt-1 tabular-nums">
                {completedCount} of {totalCount} required tasks completed
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className={`text-3xl font-bold tabular-nums leading-none tracking-tight ${
                blockDone ? "text-emerald-600" : "text-violet-600"
              }`}>
                {pct}%
              </span>
              {blockDone && (
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 mt-0.5">
                  Complete!
                </p>
              )}
            </div>
          </div>

          {/* Block progress bar */}
          <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${blockDone ? "bg-emerald-500" : "bg-violet-500"}`}
              style={{ width: `${pct}%` }}
            />
          </div>

          {/* Filter indicator + Hide Completed toggle */}
          <div className="flex items-center justify-between mt-2.5">
            {isFiltered ? (
              <p className="text-xs font-bold text-violet-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
                {visibleCount} task{visibleCount !== 1 ? "s" : ""} · {activeFilter}
              </p>
            ) : (
              <span />
            )}

            <button
              onClick={() => setHideCompleted((v) => !v)}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                hideCompleted
                  ? "bg-violet-600 border-violet-600 text-white shadow-sm"
                  : "bg-white border-gray-200 text-slate-500 hover:border-violet-300 hover:text-violet-600"
              }`}
              aria-pressed={hideCompleted}
            >
              <svg
                className="w-3 h-3 shrink-0"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {hideCompleted ? (
                  <>
                    <path d="M1 1l12 12" />
                    <path d="M7 2.5C4 2.5 1.5 7 1.5 7s.7 1.3 2 2.5" />
                    <path d="M10.5 4.5C11.8 5.7 12.5 7 12.5 7S10 11.5 7 11.5c-.9 0-1.8-.3-2.5-.7" />
                  </>
                ) : (
                  <>
                    <path d="M1.5 7S4 2.5 7 2.5 12.5 7 12.5 7 10 11.5 7 11.5 1.5 7 1.5 7z" />
                    <circle cx="7" cy="7" r="1.8" />
                  </>
                )}
              </svg>
              Hide completed
            </button>
          </div>
        </div>

        {/* ── Day complete success card ── */}
        {blockDone && (
          <DayCompleteCard
            blockTitle={block.title}
            nextBlock={nextIncompleteBlock}
            onNavigate={onNavigateTo}
          />
        )}

        {/* ── Sections ── */}
        {allBlockTasksHidden ? (
          <div className="flex flex-col items-center justify-center py-14 text-center px-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 3a9 9 0 100 18A9 9 0 0012 3z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-700">All tasks in this block are completed.</p>
            <p className="text-xs text-slate-400 mt-1">
              Turn off <span className="font-semibold text-slate-500">"Hide completed"</span> to review them.
            </p>
          </div>
        ) : visibleSections.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-500">No tasks match "{activeFilter}"</p>
            <p className="text-xs text-slate-400 mt-1">Try a different filter</p>
          </div>
        ) : (
          visibleSections.map(({ section, visibleTasks }, i) => (
            <SectionGroup
              key={i}
              section={section}
              visibleTasks={visibleTasks}
              completedIds={completedIds}
              onToggle={onToggleTask}
              isFirst={i === 0}
            />
          ))
        )}
      </div>
    </div>
  );
}
