import type { ReactNode } from "react";

interface ProgressBarProps {
  value: number;
  color?: "violet" | "emerald" | "amber";
}

function ProgressBar({ value, color = "violet" }: ProgressBarProps) {
  const fill = {
    violet:  "bg-violet-500",
    emerald: "bg-emerald-500",
    amber:   "bg-amber-400",
  }[color];

  return (
    <div className="w-full rounded-full bg-slate-100 overflow-hidden h-1.5 mt-2">
      <div
        className={`h-full rounded-full transition-all duration-500 ${fill}`}
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  );
}

interface StatCardProps {
  label: string;
  children: ReactNode;
  accent?: boolean;
}

function StatCard({ label, children, accent }: StatCardProps) {
  return (
    <div className={`bg-white rounded-2xl border px-4 py-3 flex flex-col shadow-[0_1px_4px_0_rgba(0,0,0,0.04)] ${
      accent ? "border-violet-100" : "border-gray-100"
    }`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>
      {children}
    </div>
  );
}

interface StatsCardsProps {
  overallCompleted: number;
  overallTotal: number;
  overallPct: number;

  selectedBlockTitle: string;
  selectedBlockLabel: string;
  blockCompleted: number;
  blockTotal: number;
  blockPct: number;

  weekTitle: string;
  weekCompleted: number;
  weekTotal: number;
  weekPct: number;

  incompleteOverall: number;
  incompleteWeek: number;
}

export default function StatsCards({
  overallCompleted,
  overallTotal,
  overallPct,
  selectedBlockTitle,
  selectedBlockLabel,
  blockCompleted,
  blockTotal,
  blockPct,
  weekTitle,
  weekCompleted,
  weekTotal,
  weekPct,
  incompleteOverall,
  incompleteWeek,
}: StatsCardsProps) {
  const overallDone = overallPct === 100;
  const blockDone = blockPct === 100;
  const weekDone = weekPct === 100;
  const allDone = incompleteOverall === 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

      {/* 1 — Overall Progress */}
      <StatCard label="Overall Progress">
        <p className={`text-3xl font-bold mt-1 tabular-nums leading-none tracking-tight ${
          overallDone ? "text-emerald-600" : "text-slate-900"
        }`}>
          {overallPct}%
        </p>
        <p className="text-xs text-slate-400 mt-1 font-medium tabular-nums">
          {overallCompleted} / {overallTotal} tasks
        </p>
        <ProgressBar value={overallPct} color={overallDone ? "emerald" : "violet"} />
      </StatCard>

      {/* 2 — Today */}
      <StatCard label="Today" accent>
        <p className="text-sm font-bold text-slate-800 mt-1.5 leading-snug tracking-tight line-clamp-2">
          {selectedBlockTitle}
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400 mt-0.5">
          {selectedBlockLabel}
        </p>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className={`text-xl font-bold tabular-nums leading-none tracking-tight ${
            blockDone ? "text-emerald-600" : "text-violet-600"
          }`}>
            {blockPct}%
          </span>
          <span className="text-xs text-slate-400 font-medium tabular-nums">
            {blockCompleted}/{blockTotal}
          </span>
        </div>
        <ProgressBar value={blockPct} color={blockDone ? "emerald" : "violet"} />
      </StatCard>

      {/* 3 — This Week */}
      <StatCard label="This Week" accent>
        <p className="text-sm font-bold text-slate-800 mt-1.5 leading-snug tracking-tight truncate">
          {weekTitle}
        </p>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className={`text-xl font-bold tabular-nums leading-none tracking-tight ${
            weekDone ? "text-emerald-600" : "text-violet-600"
          }`}>
            {weekPct}%
          </span>
          <span className="text-xs text-slate-400 font-medium tabular-nums">
            {weekCompleted}/{weekTotal}
          </span>
        </div>
        <ProgressBar value={weekPct} color={weekDone ? "emerald" : "violet"} />
      </StatCard>

      {/* 4 — Remaining */}
      <StatCard label="Remaining">
        <p className={`text-3xl font-bold mt-1 tabular-nums leading-none tracking-tight ${
          allDone ? "text-emerald-600" : "text-slate-900"
        }`}>
          {incompleteOverall}
        </p>
        {incompleteWeek > 0 ? (
          <p className="text-xs text-amber-500 font-semibold mt-1 tabular-nums">
            {incompleteWeek} left this week
          </p>
        ) : (
          <p className="text-xs text-emerald-500 font-semibold mt-1">
            {allDone ? "All complete!" : "Week complete!"}
          </p>
        )}
        <ProgressBar
          value={overallTotal > 0 ? Math.round((overallTotal - incompleteOverall) / overallTotal * 100) : 0}
          color={allDone ? "emerald" : "amber"}
        />
      </StatCard>

    </div>
  );
}
