import { useState, useMemo, useCallback } from "react";
import { Link } from "wouter";
import {
  prepFlowPlan,
  getOverallProgress,
  searchPlan,
  type PlanBlock,
} from "../data/prepFlowPlan";
import { type TaskFilter, FILTER_OPTIONS } from "../lib/filters";
import TaskArea from "./TaskArea";
import SearchResults from "./SearchResults";

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

/* ── Constants ───────────────────────────────────────────────── */
const WEEK_LABELS = [
  "Getting Started",
  "Week 1", "Week 2", "Week 3", "Week 4",
  "Week 5", "Week 6", "Week 7", "Week 8",
];

/* ── Chevron icon ────────────────────────────────────────────── */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-[#475569] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── DayRow: one accordion row ───────────────────────────────── */
interface DayRowProps {
  block: PlanBlock;
  isExpanded: boolean;
  isFirst: boolean;
  completedIds: Set<string>;
  onToggle: (id: string) => void;
  onToggleTask: (taskId: string) => void;
  onBulkToggle: (block: PlanBlock) => void;
  onNavigateTo: (blockId: string) => void;
  activeFilter: TaskFilter;
}

function DayRow({
  block, isExpanded, isFirst, completedIds,
  onToggle, onToggleTask, onBulkToggle, onNavigateTo, activeFilter,
}: DayRowProps) {
  const required = useMemo(
    () => block.sections.flatMap((s) => s.tasks.filter((t) => !t.optional)),
    [block]
  );
  const done = required.filter((t) => completedIds.has(t.id)).length;
  const allDone = required.length > 0 && done === required.length;

  return (
    <div className={!isFirst ? "border-t border-[#b5d4ea]" : ""}>
      {/* Accordion header */}
      <div className="flex items-center bg-[#c7e0f1] px-4 py-[10px] gap-3">
        {/* Title (clicking expands/collapses) */}
        <button
          className="flex-1 text-left focus:outline-none min-w-0"
          onClick={() => onToggle(block.id)}
        >
          <span className="text-[15px] font-semibold text-[#172033] leading-snug">
            {block.title}
          </span>
        </button>

        {/* Done toggle */}
        <button
          onClick={(e) => { e.stopPropagation(); onBulkToggle(block); }}
          className="flex items-center gap-1.5 shrink-0 focus:outline-none group"
          title={allDone ? "Mark all incomplete" : "Mark all as done"}
        >
          <div
            className="w-[14px] h-[14px] border flex items-center justify-center shrink-0 transition-colors"
            style={{
              borderRadius: 2,
              background: allDone ? "#2f6bff" : "white",
              borderColor: allDone ? "#2f6bff" : "#64748b",
            }}
          >
            {allDone && (
              <svg className="w-[9px] h-[9px] text-white" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 4.5L3.5 6.5L7.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-[14px] font-medium text-[#334155] group-hover:text-[#172033] transition-colors">
            Done
          </span>
        </button>

        {/* Chevron */}
        <button
          onClick={() => onToggle(block.id)}
          className="shrink-0 focus:outline-none"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <ChevronIcon open={isExpanded} />
        </button>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="bg-white">
          <TaskArea
            block={block}
            plan={prepFlowPlan}
            completedIds={completedIds}
            onToggleTask={onToggleTask}
            onNavigateTo={onNavigateTo}
            activeFilter={activeFilter}
            embedded
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
  const [activeWeek, setActiveWeek] = useState<number>(0);
  const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("All");

  const completedIds = useMemo(
    () => new Set(Object.keys(completedTasks).filter((k) => completedTasks[k])),
    [completedTasks]
  );

  const overall = useMemo(
    () => getOverallProgress(prepFlowPlan, completedIds),
    [completedIds]
  );

  const currentBlocks = useMemo(
    () => prepFlowPlan.filter((b) => b.week === activeWeek),
    [activeWeek]
  );

  const isSearching = searchQuery.trim().length > 0;

  const searchResults = useMemo(
    () => (isSearching ? searchPlan(prepFlowPlan, searchQuery) : []),
    [searchQuery, isSearching]
  );

  /* ── Handlers ────────────────────────────────────────────── */
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

  const handleNavigateTo = useCallback((blockId: string) => {
    const block = prepFlowPlan.find((b) => b.id === blockId);
    if (!block) return;
    setActiveWeek(block.week);
    setExpandedBlockId(blockId);
    setSearchQuery("");
    setActiveFilter("All");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleExpand = useCallback((blockId: string) => {
    setExpandedBlockId((prev) => (prev === blockId ? null : blockId));
  }, []);

  const handleWeekChange = useCallback((week: number) => {
    setActiveWeek(week);
    setExpandedBlockId(null);
  }, []);

  const weekTitle =
    activeWeek === 0
      ? "Getting Started"
      : `Week ${activeWeek} of The Two-Month Study Plan`;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="border-b border-[#e2e8f0] bg-white sticky top-0 z-20">
        <div className="max-w-[1200px] mx-auto px-5 h-13 flex items-center gap-4 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="text-[16px] font-bold text-[#172033] hover:text-[#2f6bff] transition-colors shrink-0 mr-1"
          >
            PrepFlow
          </Link>

          {/* Overall progress pill */}
          <div className="hidden sm:flex items-center gap-2 text-[13px] text-[#64748b] shrink-0">
            <div className="h-1.5 w-20 rounded-full bg-[#e8f1f9] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#2f6bff] transition-all duration-500"
                style={{ width: `${overall.pct}%` }}
              />
            </div>
            <span className="tabular-nums font-medium">{overall.pct}%</span>
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-xs ml-auto sm:ml-0">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94a3b8] pointer-events-none"
              fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="7" cy="7" r="5" />
              <path d="M11 11l3 3" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks…"
              className="w-full pl-8 pr-7 py-1.5 text-[14px] border border-[#e2e8f0] rounded-md bg-white text-[#172033] placeholder-[#94a3b8] focus:outline-none focus:border-[#2f6bff] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-[#94a3b8] hover:text-[#475569] transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 2l8 8M10 2l-8 8" />
                </svg>
              </button>
            )}
          </div>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="shrink-0 text-[12px] text-[#94a3b8] hover:text-[#475569] transition-colors"
            title="Reset all progress"
          >
            Reset
          </button>
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────── */}
      <main className="max-w-[1200px] mx-auto px-5 py-8">

        {isSearching ? (
          /* ── Search results ──────────────────────────────── */
          <div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-[15px] text-[#172033] font-semibold">
                Search results for "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-[13px] text-[#1a6edf] hover:underline"
              >
                Clear search
              </button>
            </div>
            <SearchResults
              results={searchResults}
              completedIds={completedIds}
              onSelectBlock={handleNavigateTo}
              query={searchQuery}
            />
          </div>
        ) : (
          <>
            {/* ── Page title ───────────────────────────────── */}
            <h1 className="text-[28px] font-bold text-[#172033] mb-5 tracking-tight">
              {weekTitle}
            </h1>

            {/* ── Week tabs ────────────────────────────────── */}
            <div className="border-b border-[#e2e8f0] mb-4 overflow-x-auto">
              <div className="flex gap-0 min-w-max">
                {WEEK_LABELS.map((label, i) => (
                  <button
                    key={i}
                    onClick={() => handleWeekChange(i)}
                    className={`px-4 pb-3 pt-0.5 text-[15px] whitespace-nowrap transition-colors border-b-2 font-medium ${
                      activeWeek === i
                        ? "text-[#2f6bff] border-[#2f6bff]"
                        : "text-[#64748b] border-transparent hover:text-[#334155] hover:border-[#d1e8f5]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Filter chips ─────────────────────────────── */}
            <div className="flex gap-1.5 flex-wrap mb-5">
              {FILTER_OPTIONS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-[5px] text-[13px] font-medium rounded-full border transition-colors ${
                    activeFilter === filter
                      ? "bg-[#2f6bff] text-white border-[#2f6bff]"
                      : "text-[#64748b] border-[#e2e8f0] hover:border-[#94a3b8] hover:text-[#334155] bg-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* ── Accordion list ───────────────────────────── */}
            {currentBlocks.length === 0 ? (
              <div className="text-center py-16 text-[#94a3b8] text-[15px]">
                No content for this week.
              </div>
            ) : (
              <div className="border border-[#b5d4ea] rounded-[6px] overflow-hidden">
                {currentBlocks.map((block, i) => (
                  <DayRow
                    key={block.id}
                    block={block}
                    isExpanded={expandedBlockId === block.id}
                    isFirst={i === 0}
                    completedIds={completedIds}
                    onToggle={toggleExpand}
                    onToggleTask={handleToggleTask}
                    onBulkToggle={handleBulkToggle}
                    onNavigateTo={handleNavigateTo}
                    activeFilter={activeFilter}
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
