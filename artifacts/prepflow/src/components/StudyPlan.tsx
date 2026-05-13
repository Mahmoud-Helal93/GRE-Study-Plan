import { useState, useMemo, useCallback } from "react";
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

/* ── HomeView ────────────────────────────────────────────────── */
interface HomeViewProps {
  overall: { completed: number; total: number; pct: number };
  completedIds: Set<string>;
  onNavigate: (week: number) => void;
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#d1e8f5] rounded-[6px] overflow-hidden mb-5">
      <div className="bg-[#c7e0f1] px-5 py-2.5">
        <h2 className="text-[14px] font-semibold text-[#172033]">{title}</h2>
      </div>
      <div className="bg-white px-5 py-4">{children}</div>
    </div>
  );
}

function HomeView({ overall, completedIds, onNavigate }: HomeViewProps) {
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
    <div className="max-w-[860px]">
      {/* Title */}
      <h1 className="text-[30px] font-bold text-[#172033] mb-1 tracking-tight">
        GRE Study Plan
      </h1>
      <p className="text-[16px] text-[#475569] leading-relaxed mb-7">
        A clean, organized two-month roadmap for GRE preparation.
      </p>

      {/* Overview */}
      <SectionCard title="Welcome">
        <p className="text-[15px] text-[#334155] leading-[1.85]">
          This app helps you track the{" "}
          <span className="font-semibold text-[#172033]">GregMat two-month GRE study plan</span>.
          Move through <span className="font-medium text-[#172033]">Getting Started</span> to set
          up materials and accounts, then follow{" "}
          <span className="font-medium text-[#172033]">Weeks 1–8</span> with structured daily sessions.
          Each day is broken into <em>Things to Watch</em> (video lessons) and{" "}
          <em>Things to Do</em> (practice tasks). Use the tabs above to jump to any week.
        </p>
      </SectionCard>

      {/* Progress */}
      <SectionCard title="Study Plan Progress">
        {/* Overall bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[14px] font-semibold text-[#172033]">Overall</span>
            <span className="text-[13px] text-[#475569] tabular-nums">
              {overall.completed} / {overall.total} tasks · {overall.pct}%
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#e8f1f9] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                overall.pct === 100 ? "bg-emerald-500" : "bg-[#2f6bff]"
              }`}
              style={{ width: `${overall.pct}%` }}
            />
          </div>
          {completedDays > 0 && (
            <p className="text-[12px] text-[#94a3b8] mt-1.5">
              {completedDays} of {prepFlowPlan.length} days fully completed
            </p>
          )}
        </div>

        {/* Per-week mini bars */}
        <div className="flex flex-col gap-2.5">
          {weekData.map(({ label, week, done, total, pct }) => (
            <div key={week} className="flex items-center gap-3">
              <button
                onClick={() => onNavigate(week)}
                className="w-32 shrink-0 text-left text-[13px] font-medium text-[#1a6edf] hover:underline"
              >
                {label}
              </button>
              <div className="flex-1 h-1.5 rounded-full bg-[#e8f1f9] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    pct === 100 ? "bg-emerald-500" : "bg-[#2f6bff]"
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-[12px] text-[#94a3b8] tabular-nums w-16 text-right shrink-0">
                {done}/{total}
              </span>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Quick Navigation */}
      <SectionCard title="Quick Navigation">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {weekData.map(({ label, week, pct }) => (
            <button
              key={week}
              onClick={() => onNavigate(week)}
              className="flex items-center gap-3 text-left px-4 py-2.5 rounded-[4px] border border-[#e2e8f0] hover:border-[#9bc4e0] hover:bg-[#f4fafd] transition-colors group"
            >
              <span className="text-[14px] font-medium text-[#172033] group-hover:text-[#2f6bff] transition-colors flex-1 min-w-0">
                {label}
              </span>
              {pct === 100 ? (
                <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l4 4 6-6" />
                </svg>
              ) : pct > 0 ? (
                <span className="text-[12px] font-medium text-[#2f6bff] tabular-nums shrink-0">{pct}%</span>
              ) : (
                <svg className="w-4 h-4 text-[#cbd5e1] group-hover:text-[#2f6bff] shrink-0 transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 12l4-4-4-4" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </SectionCard>

      {/* How to Use */}
      <SectionCard title="How to Use This Plan">
        <ul className="flex flex-col gap-2.5">
          {[
            "Select a week tab above, then click any day row to expand it.",
            "Complete each day's Things to Watch (videos) and Things to Do (practice tasks).",
            "Check off individual tasks as you finish them — progress saves automatically.",
            "Click any blue link to open the study resource in a new tab.",
            "Use the Done button on an accordion row to mark the entire day complete at once.",
            "Use the filter chips (Quant, Verbal, Writing, etc.) to focus on a specific subject.",
            "Review your progress on this Home page at any time.",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#1a6edf] mt-[3px] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8l4 4 6-6" />
              </svg>
              <span className="text-[15px] text-[#334155] leading-[1.75]">{tip}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
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
  // -1 = Home tab
  const [activeWeek, setActiveWeek] = useState<number>(-1);
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
    () => (activeWeek >= 0 ? prepFlowPlan.filter((b) => b.week === activeWeek) : []),
    [activeWeek]
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
      : activeWeek > 0
      ? `Week ${activeWeek} of The Two-Month Study Plan`
      : "";

  const isHomePage = activeWeek === -1 && !isSearching;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="border-b border-[#e2e8f0] bg-white sticky top-0 z-20">
        <div className="max-w-[1200px] mx-auto px-5 flex items-center gap-4 py-3">
          {/* Logo — clicking goes to Home tab */}
          <button
            onClick={() => handleWeekChange(-1)}
            className="text-[16px] font-bold text-[#172033] hover:text-[#2f6bff] transition-colors shrink-0 mr-1 focus:outline-none"
          >
            PrepFlow
          </button>

          {/* Overall progress bar */}
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
              fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
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
      <main className="max-w-[1200px] mx-auto px-5 py-7">

        {isSearching ? (
          /* ── Search results ─────────────────────────────── */
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
            {/* ── Page title (only on week tabs, not Home) ── */}
            {!isHomePage && (
              <h1 className="text-[28px] font-bold text-[#172033] mb-5 tracking-tight">
                {weekTitle}
              </h1>
            )}

            {/* ── Tabs: Home | Getting Started | Week 1–8 ── */}
            <div className="border-b border-[#e2e8f0] mb-5 overflow-x-auto">
              <div className="flex gap-0 min-w-max">
                {ALL_TABS.map(({ week, label }) => (
                  <button
                    key={week}
                    onClick={() => handleWeekChange(week)}
                    className={`px-4 pb-3 pt-0.5 text-[15px] whitespace-nowrap transition-colors border-b-2 font-medium ${
                      activeWeek === week
                        ? "text-[#2f6bff] border-[#2f6bff]"
                        : "text-[#64748b] border-transparent hover:text-[#334155] hover:border-[#d1e8f5]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Home page content ─────────────────────── */}
            {isHomePage ? (
              <HomeView
                overall={overall}
                completedIds={completedIds}
                onNavigate={handleWeekChange}
              />
            ) : (
              <>
                {/* ── Filter chips ──────────────────────── */}
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

                {/* ── Accordion list ────────────────────── */}
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
          </>
        )}
      </main>
    </div>
  );
}
