import { useState, useMemo, useEffect } from "react";
import {
  PlanBlock,
  PlanGroup,
  getPlanGroups,
  getBlockProgress,
  getGroupProgress,
  getOverallProgress,
} from "../data/prepFlowPlan";

/* ── DayRow ───────────────────────────────────────────────── */
function getItemLabel(block: PlanBlock): string {
  if (block.type === "setup") return block.label;
  const cats = block.sections.map((s) => s.category);
  if (cats.includes("Exam Day")) return "Exam Day";
  if (cats.length === 1 && cats[0] === "Practice Test") return "Practice Test";
  return block.label;
}

function getItemIcon(block: PlanBlock): string {
  const cats = block.sections.map((s) => s.category);
  if (block.type === "setup") return "📋";
  if (cats.includes("Exam Day")) return "🎓";
  if (cats.length === 1 && cats[0] === "Practice Test") return "📝";
  return "";
}

interface DayRowProps {
  block: PlanBlock;
  isSelected: boolean;
  completedIds: Set<string>;
  plan: PlanBlock[];
  onClick: () => void;
}

function DayRow({ block, isSelected, completedIds, plan, onClick }: DayRowProps) {
  const { completed, total, pct } = getBlockProgress(plan, block.id, completedIds);
  const label = getItemLabel(block);
  const icon = getItemIcon(block);
  const isDone = total > 0 && completed === total;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-lg px-3 py-2 transition-all duration-100 group relative ${
        isSelected
          ? "bg-violet-600 shadow-sm shadow-violet-900/40"
          : "hover:bg-white/[0.06]"
      }`}
    >
      {isSelected && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full bg-violet-200" />
      )}
      <div className="flex items-center justify-between gap-2">
        <span className={`text-[13px] font-medium truncate flex items-center gap-1.5 min-w-0 leading-none ${
          isSelected ? "text-white" : isDone ? "text-slate-500" : "text-slate-300 group-hover:text-slate-100"
        }`}>
          {icon && <span className="text-xs shrink-0 opacity-75">{icon}</span>}
          <span className="truncate">{label}</span>
        </span>
        <span className={`text-[11px] font-semibold shrink-0 tabular-nums ${
          isSelected ? "text-violet-200" : isDone ? "text-emerald-400" : "text-slate-600"
        }`}>
          {isDone ? "✓" : completed > 0 ? `${pct}%` : ""}
        </span>
      </div>
      {total > 0 && pct > 0 && (
        <div className={`mt-1.5 h-px w-full rounded-full overflow-hidden ${
          isSelected ? "bg-violet-500/60" : "bg-slate-700"
        }`}>
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isDone
                ? isSelected ? "bg-emerald-300" : "bg-emerald-500"
                : isSelected ? "bg-violet-200" : "bg-violet-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </button>
  );
}

/* ── ProgressRing ─────────────────────────────────────────── */
function ProgressRing({ pct, isDone, isActive }: { pct: number; isDone: boolean; isActive: boolean }) {
  const r = 8;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.min(pct, 100) / 100);
  const trackColor = isActive ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.06)";
  const fillColor = isDone ? "#10b981" : isActive ? "#8b5cf6" : "#6d28d9";

  return (
    <svg width="22" height="22" viewBox="0 0 22 22" className="shrink-0 -rotate-90">
      {/* Track */}
      <circle cx="11" cy="11" r={r} fill="none" stroke={trackColor} strokeWidth="2.2" />
      {/* Progress arc */}
      {pct > 0 && (
        <circle
          cx="11" cy="11" r={r}
          fill="none"
          stroke={fillColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      )}
      {/* Centre dot when fully done */}
      {isDone && (
        <circle cx="11" cy="11" r="2.5" fill="#10b981" className="rotate-90 origin-center" />
      )}
    </svg>
  );
}

/* ── WeekGroup ────────────────────────────────────────────── */
interface WeekGroupProps {
  group: PlanGroup;
  isExpanded: boolean;
  isActiveGroup: boolean;
  selectedBlockId: string;
  completedIds: Set<string>;
  plan: PlanBlock[];
  onToggleExpand: () => void;
  onSelectBlock: (id: string) => void;
}

function WeekGroup({
  group, isExpanded, isActiveGroup, selectedBlockId,
  completedIds, plan, onToggleExpand, onSelectBlock,
}: WeekGroupProps) {
  const { completed, total, pct } = useMemo(
    () => getGroupProgress(group.items, completedIds),
    [group.items, completedIds]
  );
  const isDone = total > 0 && completed === total;

  return (
    <div className="mb-px">
      <button
        onClick={onToggleExpand}
        className={`w-full text-left flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-all duration-100 ${
          isActiveGroup && !isExpanded ? "bg-white/[0.05]" : "hover:bg-white/[0.05]"
        }`}
      >
        {/* Progress ring */}
        <ProgressRing pct={pct} isDone={isDone} isActive={isActiveGroup} />

        {/* Title + count */}
        <div className="flex-1 min-w-0">
          <span className={`text-[11px] font-bold uppercase tracking-[0.13em] ${
            isActiveGroup ? "text-violet-400" : isDone ? "text-emerald-400" : "text-slate-500"
          }`}>
            {group.title}
          </span>
        </div>

        {total > 0 && (
          <span className={`text-[10px] font-semibold shrink-0 tabular-nums ${
            isDone ? "text-emerald-400" : isActiveGroup ? "text-violet-400" : "text-slate-600"
          }`}>
            {completed}/{total}
          </span>
        )}
        <svg
          className={`w-3 h-3 shrink-0 text-slate-600 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {isExpanded && (
        <div className="pl-1.5 pr-1 pb-1 flex flex-col gap-px mt-px">
          {group.items.map((block) => (
            <DayRow
              key={block.id}
              block={block}
              isSelected={block.id === selectedBlockId}
              completedIds={completedIds}
              plan={plan}
              onClick={() => onSelectBlock(block.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Sidebar ──────────────────────────────────────────────── */
interface SidebarProps {
  plan: PlanBlock[];
  selectedBlockId: string;
  onSelectBlock: (blockId: string) => void;
  completedIds: Set<string>;
  onReset: () => void;
}

export default function Sidebar({
  plan, selectedBlockId, onSelectBlock, completedIds, onReset,
}: SidebarProps) {
  const groups = useMemo(() => getPlanGroups(plan), [plan]);
  const overall = useMemo(() => getOverallProgress(plan, completedIds), [plan, completedIds]);

  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    { setup: true, "week-1": true }
  );

  useEffect(() => {
    const group = groups.find((g) => g.items.some((b) => b.id === selectedBlockId));
    if (group && !expandedGroups[group.id]) {
      setExpandedGroups((prev) => ({ ...prev, [group.id]: true }));
    }
  }, [selectedBlockId, groups]);

  function toggleGroup(groupId: string) {
    setExpandedGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  }

  function selectDayAndOpenGroup(dayId: string, groupId: string) {
    onSelectBlock(dayId);
    setExpandedGroups((prev) => ({ ...prev, [groupId]: true }));
  }

  const activeGroupId = useMemo(() => {
    for (const group of groups) {
      if (group.items.some((b) => b.id === selectedBlockId)) return group.id;
    }
    return null;
  }, [groups, selectedBlockId]);

  return (
    <aside className="h-full w-full flex flex-col" style={{ background: "linear-gradient(160deg, #0d1424 0%, #0f172a 60%, #111827 100%)" }}>
      {/* ── Brand ── */}
      <div className="px-5 pt-4 pb-3.5 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-violet-900/50">
            <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4h12M2 8h8M2 12h5" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-white font-bold text-[15px] tracking-tight leading-none">PREPFLOW</div>
            <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-[0.12em] mt-[5px] leading-none">
              GRE Two-Month Plan
            </div>
          </div>
        </div>
      </div>
      {/* ── Study Plan label ── */}
      <div className="px-5 pt-3 pb-2 shrink-0 flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-600">
          Study Plan
        </p>
        <span className="text-[10px] font-semibold text-slate-700 tabular-nums">
          {overall.pct}% done
        </span>
      </div>
      {/* ── Scrollable week/day list ── */}
      <div className="flex-1 overflow-y-auto px-2 pb-2" style={{ scrollbarWidth: "thin", scrollbarColor: "#1e293b transparent" }}>
        {groups.map((group) => (
          <WeekGroup
            key={group.id}
            group={group}
            isExpanded={!!expandedGroups[group.id]}
            isActiveGroup={group.id === activeGroupId}
            selectedBlockId={selectedBlockId}
            completedIds={completedIds}
            plan={plan}
            onToggleExpand={() => toggleGroup(group.id)}
            onSelectBlock={(id) => selectDayAndOpenGroup(id, group.id)}
          />
        ))}
      </div>
      {/* ── Overall progress card + Reset ── */}
      <div className="px-3 py-2.5 shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        {/* Mini progress card */}
        <div className="rounded-xl px-3 py-2 mb-1.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">
              8-Week Plan
            </span>
            <span className={`text-xs font-bold tabular-nums leading-none ${
              overall.pct === 100 ? "text-emerald-400" : "text-violet-400"
            }`}>
              {overall.pct}%
            </span>
          </div>
          <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${overall.pct === 100 ? "bg-emerald-500" : "bg-violet-500"}`}
              style={{ width: `${overall.pct}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-600 mt-1.5 tabular-nums">
            {overall.completed} / {overall.total} tasks complete
          </p>
        </div>

        {/* Reset button */}
        <button
          onClick={onReset}
          className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all duration-150 uppercase tracking-widest"
        >
          <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 6a5 5 0 105 5" />
            <path d="M1 6V2m0 4h4" />
          </svg>
          Reset Progress
        </button>
      </div>
    </aside>
  );
}
