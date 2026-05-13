import { useState, useMemo, useCallback, useRef } from "react";
import StatsCards from "./components/StatsCards";
import Sidebar from "./components/Sidebar";
import TaskArea from "./components/TaskArea";
import SearchBar from "./components/SearchBar";
import { type TaskFilter } from "./lib/filters";
import SearchResults from "./components/SearchResults";
import {
  prepFlowPlan,
  getOverallProgress,
  getBlockProgress,
  getWeekProgress,
  getIncompleteCount,
  searchPlan,
} from "./data/prepFlowPlan";

const STORAGE_KEY = "prepflow-progress-full-two-month-plan";
const DEFAULT_BLOCK_ID = prepFlowPlan[0]?.id ?? "";

function loadFromStorage(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
      return parsed as Record<string, boolean>;
    }
  } catch {
    // corrupt data — start fresh
  }
  return {};
}

function saveToStorage(completedTasks: Record<string, boolean>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTasks));
  } catch {
    // storage full or unavailable — silently skip
  }
}

export default function App() {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(
    () => loadFromStorage()
  );
  const [selectedBlockId, setSelectedBlockId] = useState<string>(DEFAULT_BLOCK_ID);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("All");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const isSearching = searchQuery.trim().length > 0;

  const completedIds = useMemo(
    () => new Set(Object.keys(completedTasks).filter((k) => completedTasks[k])),
    [completedTasks]
  );

  const selectedBlock = useMemo(
    () => prepFlowPlan.find((b) => b.id === selectedBlockId) ?? null,
    [selectedBlockId]
  );

  const overall = useMemo(
    () => getOverallProgress(prepFlowPlan, completedIds),
    [completedIds]
  );

  const blockProgress = useMemo(
    () => getBlockProgress(prepFlowPlan, selectedBlockId, completedIds),
    [selectedBlockId, completedIds]
  );

  const selectedWeekNumber = selectedBlock?.week ?? 1;
  const weekProgress = useMemo(
    () => getWeekProgress(selectedWeekNumber, prepFlowPlan, completedIds),
    [selectedWeekNumber, completedIds]
  );

  const incompleteOverall = useMemo(
    () => getIncompleteCount(prepFlowPlan, completedIds),
    [completedIds]
  );
  const incompleteWeek = weekProgress.total - weekProgress.completed;

  const searchResults = useMemo(
    () => searchPlan(prepFlowPlan, searchQuery),
    [searchQuery]
  );

  const handleToggleTask = useCallback((taskId: string) => {
    setCompletedTasks((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      if (!next[taskId]) delete next[taskId];
      saveToStorage(next);
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    if (window.confirm("Reset all PrepFlow progress?")) {
      setCompletedTasks({});
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleNavigateTo = useCallback((blockId: string) => {
    setSelectedBlockId(blockId);
    setSearchQuery("");
    setActiveFilter("All");
    setMobileNavOpen(false);
    requestAnimationFrame(() => {
      contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  return (
    /* ── Full-viewport dashboard shell ── */
    <div className="flex h-screen overflow-hidden bg-[#f7f8fb]">

      {/* ── Mobile backdrop ── */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* ── Full-height left sidebar ── */}
      <div
        className={`
          fixed lg:relative inset-y-0 left-0 z-30 lg:z-auto
          w-[280px] shrink-0 h-full
          transition-transform duration-200 ease-in-out
          ${mobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <Sidebar
          plan={prepFlowPlan}
          selectedBlockId={selectedBlockId}
          onSelectBlock={handleNavigateTo}
          completedIds={completedIds}
          onReset={handleReset}
        />
      </div>

      {/* ── Main content area ── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">

        {/* ── Mobile top bar ── */}
        <div
          className="lg:hidden flex items-center gap-3 px-4 py-3.5 shrink-0"
          style={{ background: "linear-gradient(180deg, #0e1525 0%, #111827 100%)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <button
            onClick={() => setMobileNavOpen(true)}
            className="text-slate-400 hover:text-white transition-colors p-1 -ml-1"
            aria-label="Open navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h14M3 10h14M3 15h8" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-[11px] leading-none">P</span>
            </div>
            <span className="text-white font-bold text-sm tracking-tight">PREPFLOW</span>
          </div>
        </div>

        {/* ── Top header bar — desktop ── */}
        <div className="hidden lg:flex items-center px-6 pt-3.5 pb-3 shrink-0 gap-4">
          <div className="min-w-0 shrink-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Study Plan
            </p>
            <h1 className="text-xl font-bold text-slate-900 mt-0.5 truncate leading-tight">
              {selectedBlock?.title ?? "—"}
            </h1>
          </div>

          {/* Search input — desktop only */}
          <div className="relative w-64 shrink-0">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-slate-400 pointer-events-none"
              fill="none" viewBox="0 0 16 16" stroke="currentColor"
              strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="7" cy="7" r="5" />
              <path d="M11 11l3 3" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks…"
              className="w-full pl-9 pr-8 py-2 text-sm bg-white border border-gray-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100/70 transition-all duration-150 font-medium shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all focus:outline-none"
                aria-label="Clear search"
              >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 2l8 8M10 2l-8 8" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ── Stats cards row — mobile only (desktop shows chips in header) ── */}
        <div className="lg:hidden px-5 pt-0 pb-3 shrink-0">
          <StatsCards
            overallCompleted={overall.completed}
            overallTotal={overall.total}
            overallPct={overall.pct}
            selectedBlockTitle={selectedBlock?.title ?? "—"}
            selectedBlockLabel={selectedBlock?.label ?? "—"}
            blockCompleted={blockProgress.completed}
            blockTotal={blockProgress.total}
            blockPct={blockProgress.pct}
            weekTitle={weekProgress.weekTitle}
            weekCompleted={weekProgress.completed}
            weekTotal={weekProgress.total}
            weekPct={weekProgress.pct}
            incompleteOverall={incompleteOverall}
            incompleteWeek={incompleteWeek}
          />
        </div>

        {/* ── Search + filter bar ── */}
        <SearchBar
          query={searchQuery}
          onQueryChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          isSearching={isSearching}
        />

        {/* ── Content + right panel ── */}
        <div className="flex-1 flex overflow-hidden min-h-0">

          {/* Scrollable task content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto min-w-0">
            {isSearching ? (
              <SearchResults
                results={searchResults}
                completedIds={completedIds}
                onSelectBlock={handleNavigateTo}
                query={searchQuery}
              />
            ) : (
              <TaskArea
                block={selectedBlock}
                plan={prepFlowPlan}
                completedIds={completedIds}
                onToggleTask={handleToggleTask}
                onNavigateTo={handleNavigateTo}
                activeFilter={activeFilter}
              />
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
