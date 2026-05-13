import { useState, useMemo, useCallback, useRef } from "react";
import {
  prepFlowPlan,
  getOverallProgress,
  searchPlan,
  type PlanBlock,
} from "../data/prepFlowPlan";
import { type TaskFilter, FILTER_OPTIONS } from "../lib/filters";
import TaskArea, { type TaskActions } from "./TaskArea";
import SearchResults from "./SearchResults";
import { usePlanOverrides } from "../hooks/usePlanOverrides";

/* ── Storage ─────────────────────────────────────────────────── */
const STORAGE_KEY = "prepflow-progress-full-two-month-plan";

function loadFromStorage(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
      return parsed as Record<string, boolean>;
    }
  } catch { /* ignore */ }
  return {};
}

function saveToStorage(data: Record<string, boolean>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* ignore */ }
}

/* ── Tabs: -1 = Home, 0 = Getting Started, 1–8 = weeks ─────── */
const ALL_TABS = [
  { week: -1, label: "Home" },
  { week: 0,  label: "Getting Started" },
  { week: 1,  label: "Week 1" },
  { week: 2,  label: "Week 2" },
  { week: 3,  label: "Week 3" },
  { week: 4,  label: "Week 4" },
  { week: 5,  label: "Week 5" },
  { week: 6,  label: "Week 6" },
  { week: 7,  label: "Week 7" },
  { week: 8,  label: "Week 8" },
];

/* ── Graduation cap icon ─────────────────────────────────────── */
function GraduationCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  );
}

/* ── Chevron icon ────────────────────────────────────────────── */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-[18px] h-[18px] text-[#64748b] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"
    >
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── HomeView ────────────────────────────────────────────────── */
interface HomeViewProps {
  overall: { completed: number; total: number; pct: number };
  completedIds: Set<string>;
  onNavigate: (week: number) => void;
  onJumpToToday: (() => void) | null;
  nextBlockTitle: string | null;
}

function HomeView({ overall, completedIds, onNavigate, onJumpToToday, nextBlockTitle }: HomeViewProps) {
  const weekData = useMemo(() => {
    const rows: { label: string; week: number; done: number; total: number; pct: number }[] = [];
    for (let w = 0; w <= 8; w++) {
      const blocks = prepFlowPlan.filter((b) => b.week === w);
      const required = blocks.flatMap((b) =>
        b.sections.flatMap((s) => s.tasks.filter((t) => !t.optional))
      );
      const done = required.filter((t) => completedIds.has(t.id)).length;
      const total = required.length;
      rows.push({
        label: w === 0 ? "Getting Started" : `Week ${w}`,
        week: w,
        done,
        total,
        pct: total > 0 ? Math.round((done / total) * 100) : 0,
      });
    }
    return rows;
  }, [completedIds]);

  const completedDays = useMemo(() => {
    return prepFlowPlan.filter((b) => {
      const req = b.sections.flatMap((s) => s.tasks.filter((t) => !t.optional));
      return req.length > 0 && req.every((t) => completedIds.has(t.id));
    }).length;
  }, [completedIds]);

  return (
    <div className="w-full">
      <h1 className="text-[42px] font-bold text-[#0f1f3d] mb-2 tracking-tight leading-tight">
        GRE Study Plan
      </h1>
      <p className="text-[17px] text-[#64748b] mb-6">
        A clean, organized two-month roadmap for GRE preparation.
      </p>

      {/* Resume / jump to next incomplete day */}
      {onJumpToToday && overall.pct < 100 && (
        <div className="mb-8">
          <button
            onClick={onJumpToToday}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[8px] bg-[#1565c0] hover:bg-[#1251a3] text-white text-[15px] font-semibold transition-colors focus:outline-none shadow-sm"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
            {overall.pct === 0 ? "Start the plan" : "Resume where I left off"}
            {nextBlockTitle && (
              <span className="text-[13px] font-normal text-blue-200 truncate max-w-[180px]">
                — {nextBlockTitle}
              </span>
            )}
          </button>
        </div>
      )}

      {overall.pct === 100 && (
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-emerald-50 border border-emerald-200 text-emerald-700 text-[15px] font-semibold">
          <svg className="w-4 h-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 8l4 4 7-7" />
          </svg>
          Full plan complete!
        </div>
      )}

      {/* Progress summary */}
      <div className="border border-[#d9e4f0] rounded-[8px] overflow-hidden mb-6">
        <div className="bg-[#eaf5fc] px-6 py-3 border-b border-[#d9e4f0]">
          <span className="text-[14px] font-semibold text-[#334155] uppercase tracking-wide">Overall Progress</span>
        </div>
        <div className="bg-white px-6 py-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[16px] font-semibold text-[#0f1f3d]">
              {overall.completed} / {overall.total} tasks
            </span>
            <span className="text-[24px] font-bold text-[#1565c0] tabular-nums">{overall.pct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#c7e0f1] overflow-hidden mb-2">
            <div
              className={`h-full rounded-full transition-all duration-500 ${overall.pct === 100 ? "bg-emerald-500" : "bg-[#1565c0]"}`}
              style={{ width: `${overall.pct}%` }}
            />
          </div>
          {completedDays > 0 && (
            <p className="text-[13px] text-[#94a3b8]">
              {completedDays} of {prepFlowPlan.length} days fully completed
            </p>
          )}
        </div>
      </div>

      {/* Per-week grid */}
      <div className="border border-[#d9e4f0] rounded-[8px] overflow-hidden mb-6">
        <div className="bg-[#eaf5fc] px-6 py-3 border-b border-[#d9e4f0]">
          <span className="text-[14px] font-semibold text-[#334155] uppercase tracking-wide">Weekly Progress</span>
        </div>
        <div className="bg-white px-6 py-5 flex flex-col gap-3">
          {weekData.map(({ label, week, done, total, pct }) => (
            <div key={week} className="flex items-center gap-4">
              <button
                onClick={() => onNavigate(week)}
                className="w-36 shrink-0 text-left text-[14px] font-medium text-[#1565c0] hover:underline"
              >
                {label}
              </button>
              <div className="flex-1 h-1.5 rounded-full bg-[#c7e0f1] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? "bg-emerald-500" : "bg-[#1565c0]"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-[13px] text-[#94a3b8] tabular-nums w-14 text-right shrink-0">
                {done}/{total}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick nav */}
      <div className="border border-[#d9e4f0] rounded-[8px] overflow-hidden">
        <div className="bg-[#eaf5fc] px-6 py-3 border-b border-[#d9e4f0]">
          <span className="text-[14px] font-semibold text-[#334155] uppercase tracking-wide">Quick Navigation</span>
        </div>
        <div className="bg-white px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {weekData.map(({ label, week, pct }) => (
            <button
              key={week}
              onClick={() => onNavigate(week)}
              className="flex items-center gap-3 text-left px-4 py-2.5 rounded-[6px] border border-[#c7e0f1] hover:border-[#93b8de] hover:bg-[#eaf5fc] transition-colors group"
            >
              <span className="text-[15px] font-medium text-[#0f1f3d] group-hover:text-[#1565c0] transition-colors flex-1 min-w-0">
                {label}
              </span>
              {pct === 100 ? (
                <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l4 4 6-6" />
                </svg>
              ) : pct > 0 ? (
                <span className="text-[12px] font-medium text-[#1565c0] tabular-nums shrink-0">{pct}%</span>
              ) : (
                <svg className="w-4 h-4 text-[#c4d2e4] group-hover:text-[#1565c0] shrink-0 transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 12l4-4-4-4" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── DayRow: one accordion row ───────────────────────────────── */
interface DayRowProps {
  block: PlanBlock;
  isExpanded: boolean;
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  onToggleTask: (taskId: string) => void;
  onBulkToggle: (block: PlanBlock) => void;
  onNavigateTo: (blockId: string) => void;
  activeFilter: TaskFilter;
  taskActions: TaskActions;
  plan: PlanBlock[];
  isLast: boolean;
}

function DayRow({
  block, isExpanded, completedIds,
  onToggle, onToggleTask, onBulkToggle, onNavigateTo, activeFilter, taskActions, plan, isLast,
}: DayRowProps) {
  const required = useMemo(
    () => block.sections.flatMap((s) => s.tasks.filter((t) => !t.optional)),
    [block]
  );
  const done = required.filter((t) => completedIds.has(t.id)).length;
  const allDone = required.length > 0 && done === required.length;

  return (
    <div className={!isLast ? "border-b border-[#d9e4f0]" : ""}>
      {/* Accordion header */}
      <div
        className={`flex items-center px-5 py-3.5 gap-4 transition-colors cursor-pointer select-none ${
          isExpanded ? "bg-[#c7e0f1]" : "bg-[#eaf5fc] hover:bg-[#c7e0f1]"
        }`}
        onClick={() => onToggle(block.id)}
      >
        <span className="flex-1 text-[16px] font-medium text-[#0f1f3d] leading-snug min-w-0">
          {block.title}
        </span>

        {/* Done toggle */}
        <button
          onClick={(e) => { e.stopPropagation(); onBulkToggle(block); }}
          className="flex items-center gap-2 shrink-0 focus:outline-none"
          title={allDone ? "Mark all incomplete" : "Mark all as done"}
        >
          <div
            className="w-[15px] h-[15px] border-[1.5px] flex items-center justify-center shrink-0 transition-colors rounded-[2px]"
            style={{
              background: allDone ? "#1565c0" : "white",
              borderColor: allDone ? "#1565c0" : "#94a3b8",
            }}
          >
            {allDone && (
              <svg className="w-[9px] h-[9px] text-white" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 4.5L3.5 6.5L7.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-[15px] text-[#475569]">Done</span>
        </button>

        <ChevronIcon open={isExpanded} />
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="bg-white border-t border-[#c7e0f1]">
          <TaskArea
            block={block}
            plan={plan}
            completedIds={completedIds}
            onToggleTask={onToggleTask}
            onNavigateTo={onNavigateTo}
            activeFilter={activeFilter}
            embedded
            taskActions={taskActions}
          />
        </div>
      )}
    </div>
  );
}

/* ── StudyPlan ───────────────────────────────────────────────── */
export default function StudyPlan() {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(
    () => loadFromStorage()
  );
  const [activeWeek, setActiveWeek] = useState<number>(-1);
  const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("All");
  const [showFilters, setShowFilters] = useState(false);

  const importInputRef = useRef<HTMLInputElement>(null);

  /* ── Plan overrides ─────────────────────────────────────────── */
  const {
    overrides,
    applyOverrides,
    deleteTask,
    editTask,
    moveTask,
    addTask,
    getNote,
    setNote,
    replaceAll: replaceOverrides,
  } = usePlanOverrides();

  const effectivePlan = useMemo(() => applyOverrides(prepFlowPlan), [applyOverrides]);

  const taskActions: TaskActions = useMemo(() => ({
    onDelete: deleteTask,
    onEdit: editTask,
    onMoveUp: (blockId, sectionIdx, taskId, currentOrder) =>
      moveTask(blockId, sectionIdx, taskId, "up", currentOrder),
    onMoveDown: (blockId, sectionIdx, taskId, currentOrder) =>
      moveTask(blockId, sectionIdx, taskId, "down", currentOrder),
    onAddTask: addTask,
    getNote,
    setNote,
  }), [deleteTask, editTask, moveTask, addTask, getNote, setNote]);

  const completedIds = useMemo(
    () => new Set(Object.keys(completedTasks).filter((k) => completedTasks[k])),
    [completedTasks]
  );

  const overall = useMemo(
    () => getOverallProgress(effectivePlan, completedIds),
    [effectivePlan, completedIds]
  );

  const currentBlocks = useMemo(
    () => (activeWeek >= 0 ? effectivePlan.filter((b) => b.week === activeWeek) : []),
    [activeWeek, effectivePlan]
  );

  const isSearching = searchQuery.trim().length > 0;

  const searchResults = useMemo(
    () => (isSearching ? searchPlan(prepFlowPlan, searchQuery) : []),
    [searchQuery, isSearching]
  );

  /* ── Handlers ─────────────────────────────────────────────── */
  const handleToggleTask = useCallback((taskId: string) => {
    setCompletedTasks((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      if (!next[taskId]) delete next[taskId];
      saveToStorage(next);
      return next;
    });
  }, []);

  const handleBulkToggle = useCallback(
    (block: PlanBlock) => {
      const required = block.sections.flatMap((s) => s.tasks.filter((t) => !t.optional));
      const allDone = required.every((t) => completedIds.has(t.id));
      setCompletedTasks((prev) => {
        const next = { ...prev };
        required.forEach((t) => {
          if (allDone) delete next[t.id];
          else next[t.id] = true;
        });
        saveToStorage(next);
        return next;
      });
    },
    [completedIds]
  );

  const handleReset = useCallback(() => {
    if (window.confirm("Reset all PrepFlow progress? This cannot be undone.")) {
      setCompletedTasks({});
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleExport = useCallback(() => {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: completedTasks,
      overrides,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `prepflow-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [completedTasks, overrides]);

  const handleImport = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target?.result as string);
        if (!parsed || typeof parsed !== "object" || parsed.version !== 1) {
          alert("Invalid progress file. Please use a file exported from this app.");
          return;
        }
        const progress: Record<string, boolean> =
          parsed.progress && typeof parsed.progress === "object" ? parsed.progress : {};
        saveToStorage(progress);
        setCompletedTasks(progress);
        if (parsed.overrides && typeof parsed.overrides === "object") {
          replaceOverrides({
            deletedTaskIds: parsed.overrides.deletedTaskIds ?? [],
            editedTasks: parsed.overrides.editedTasks ?? {},
            sectionOrders: parsed.overrides.sectionOrders ?? {},
            customTasks: parsed.overrides.customTasks ?? {},
            taskNotes: parsed.overrides.taskNotes ?? {},
          });
        }
      } catch {
        alert("Could not read the file. Make sure it is a valid progress export.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }, [replaceOverrides]);

  const handleNavigateTo = useCallback((blockId: string) => {
    const block = effectivePlan.find((b) => b.id === blockId);
    if (!block) return;
    setActiveWeek(block.week);
    setExpandedBlockId(blockId);
    setSearchQuery("");
    setSearchOpen(false);
    setActiveFilter("All");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [effectivePlan]);

  const toggleExpand = useCallback((blockId: string) => {
    setExpandedBlockId((prev) => (prev === blockId ? null : blockId));
  }, []);

  const handleWeekChange = useCallback((week: number) => {
    setActiveWeek(week);
    setExpandedBlockId(null);
    setShowFilters(false);
  }, []);

  const handleSearchClose = useCallback(() => {
    setSearchQuery("");
    setSearchOpen(false);
  }, []);

  const nextIncompleteBlock = useMemo(() => {
    return effectivePlan.find((block) => {
      const required = block.sections.flatMap((s) => s.tasks.filter((t) => !t.optional));
      return required.length > 0 && required.some((t) => !completedIds.has(t.id));
    }) ?? null;
  }, [effectivePlan, completedIds]);

  const handleJumpToToday = useCallback(() => {
    if (!nextIncompleteBlock) return;
    handleNavigateTo(nextIncompleteBlock.id);
  }, [nextIncompleteBlock, handleNavigateTo]);

  const pageTitle =
    activeWeek === 0
      ? "Getting Started"
      : activeWeek > 0
      ? `Week ${activeWeek} of The Two-Month Study Plan`
      : "";

  const pageSubtitle =
    activeWeek === 0
      ? "Set up your materials and accounts before diving in."
      : activeWeek > 0
      ? "Track your daily GRE tasks and mark each day complete as you progress."
      : "";

  const isHomePage = activeWeek === -1 && !isSearching;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header ───────────────────────────────────────────── */}
      <header className="border-b border-[#d9e4f0] bg-white sticky top-0 z-20">
        <div className="w-full px-8 flex items-stretch h-16 gap-0">

          {/* Logo */}
          <button
            onClick={() => handleWeekChange(-1)}
            className="flex items-center gap-2.5 shrink-0 mr-8 focus:outline-none group"
          >
            <div className="w-8 h-8 rounded-[6px] bg-[#0f1f3d] flex items-center justify-center text-white shrink-0">
              <GraduationCapIcon />
            </div>
            <span className="text-[16px] font-bold text-[#0f1f3d] whitespace-nowrap group-hover:text-[#1565c0] transition-colors">
              GRE Study Plan
            </span>
          </button>

          {/* Nav tabs — fill remaining space, scrollable */}
          <div className="flex-1 flex items-stretch overflow-x-auto scrollbar-none">
            {ALL_TABS.map(({ week, label }) => (
              <button
                key={week}
                onClick={() => handleWeekChange(week)}
                className={`px-4 text-[15px] whitespace-nowrap border-b-2 transition-colors focus:outline-none font-medium ${
                  activeWeek === week && !isSearching
                    ? "text-[#1565c0] border-[#1565c0]"
                    : "text-[#64748b] border-transparent hover:text-[#334155]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Resume button */}
          {nextIncompleteBlock && overall.pct > 0 && overall.pct < 100 && (
            <div className="flex items-center shrink-0 ml-3">
              <button
                onClick={handleJumpToToday}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#1565c0] hover:bg-[#1251a3] text-white text-[13px] font-semibold transition-colors focus:outline-none whitespace-nowrap"
                title={`Resume: ${nextIncompleteBlock.title}`}
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                </svg>
                Resume
              </button>
            </div>
          )}

          {/* Export / Import buttons */}
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <input
              ref={importInputRef}
              type="file"
              accept=".json"
              className="hidden"
              onChange={handleImport}
            />
            <button
              onClick={handleExport}
              className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-[#0f1f3d] transition-colors focus:outline-none"
              aria-label="Export progress"
              title="Export progress"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12M7 10l5 5 5-5" />
                <path d="M5 19h14" />
              </svg>
            </button>
            <button
              onClick={() => importInputRef.current?.click()}
              className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-[#0f1f3d] transition-colors focus:outline-none"
              aria-label="Import progress"
              title="Import progress"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21V9M7 14l5-5 5 5" />
                <path d="M5 5h14" />
              </svg>
            </button>
          </div>

          {/* Search icon / input */}
          <div className="flex items-center gap-2 shrink-0 ml-1">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <svg
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94a3b8] pointer-events-none"
                    fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <circle cx="7" cy="7" r="5" />
                    <path d="M11 11l3 3" />
                  </svg>
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tasks…"
                    className="w-48 pl-8 pr-3 py-1.5 text-[13px] border border-[#d9e4f0] rounded-[6px] bg-white text-[#0f1f3d] placeholder-[#94a3b8] focus:outline-none focus:border-[#1565c0] transition-colors"
                  />
                </div>
                <button
                  onClick={handleSearchClose}
                  className="text-[12px] text-[#94a3b8] hover:text-[#475569] transition-colors focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-[#0f1f3d] transition-colors focus:outline-none"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L21 21" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────── */}
      <main className="w-full px-8 py-10">

        {isSearching ? (
          /* ── Search results ──────────────────────────────── */
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-[16px] font-semibold text-[#0f1f3d]">
                Results for "{searchQuery}"
              </p>
              <button
                onClick={handleSearchClose}
                className="text-[13px] text-[#1565c0] hover:underline"
              >
                Clear
              </button>
            </div>
            <SearchResults
              results={searchResults}
              completedIds={completedIds}
              onSelectBlock={handleNavigateTo}
              query={searchQuery}
            />
          </div>

        ) : isHomePage ? (
          /* ── Home page ───────────────────────────────────── */
          <HomeView
            overall={overall}
            completedIds={completedIds}
            onNavigate={handleWeekChange}
            onJumpToToday={nextIncompleteBlock ? handleJumpToToday : null}
            nextBlockTitle={nextIncompleteBlock?.title ?? null}
          />

        ) : (
          /* ── Week / Getting Started view ─────────────────── */
          <>
            {/* Page title */}
            <div className="mb-8">
              <h1 className="text-[40px] font-bold text-[#0f1f3d] leading-tight tracking-tight">
                {pageTitle}
              </h1>
              <p className="text-[16px] text-[#64748b] mt-2">{pageSubtitle}</p>
            </div>

            {/* Filter toggle */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="text-[14px] text-[#64748b] hover:text-[#334155] flex items-center gap-1.5 transition-colors focus:outline-none"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4h12M4 8h8M6 12h4" />
                </svg>
                {showFilters ? "Hide filters" : "Filter"}
                {activeFilter !== "All" && (
                  <span className="ml-1 px-1.5 py-0.5 text-[11px] font-medium bg-[#1565c0] text-white rounded-full leading-none">
                    {activeFilter}
                  </span>
                )}
              </button>

              <button
                onClick={handleReset}
                className="text-[13px] text-[#94a3b8] hover:text-[#475569] transition-colors focus:outline-none"
                title="Reset all progress"
              >
                Reset progress
              </button>
            </div>

            {/* Filter chips */}
            {showFilters && (
              <div className="flex gap-1.5 flex-wrap mb-5">
                {FILTER_OPTIONS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-[5px] text-[14px] font-medium rounded-full border transition-colors focus:outline-none ${
                      activeFilter === filter
                        ? "bg-[#1565c0] text-white border-[#1565c0]"
                        : "text-[#64748b] border-[#d9e4f0] hover:border-[#93b8de] hover:text-[#334155] bg-white"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}

            {/* Accordion card */}
            {currentBlocks.length === 0 ? (
              <div className="text-center py-16 text-[#94a3b8] text-[15px]">
                No content for this week.
              </div>
            ) : (
              <div className="border border-[#d9e4f0] rounded-[10px] overflow-hidden">
                {currentBlocks.map((block, idx) => (
                  <DayRow
                    key={block.id}
                    block={block}
                    isExpanded={expandedBlockId === block.id}
                    completedIds={completedIds}
                    onToggle={toggleExpand}
                    onToggleTask={handleToggleTask}
                    onBulkToggle={handleBulkToggle}
                    onNavigateTo={handleNavigateTo}
                    activeFilter={activeFilter}
                    taskActions={taskActions}
                    plan={effectivePlan}
                    isLast={idx === currentBlocks.length - 1}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
