import CategoryPanel from "./CategoryPanel";
import { WeekIncompleteStat } from "../data/prepFlowPlan";

interface RightSidebarProps {
  categoryStats: Record<string, { total: number; completed: number }>;
  weekTitle: string;
  weekStats: WeekIncompleteStat[];
}

/* ── By Week card ─────────────────────────────────────────── */
interface WeekPanelProps {
  weekStats: WeekIncompleteStat[];
  weekTitle: string;
}

function WeekPanel({ weekStats, weekTitle }: WeekPanelProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_4px_0_rgba(0,0,0,0.04)] p-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3">
        By Week
      </p>

      {weekStats.length === 0 ? (
        <p className="text-xs text-slate-400 py-2">No data yet</p>
      ) : (
        <div className="flex flex-col gap-0.5">
          {weekStats.map((s) => {
            const isActive = s.weekTitle === weekTitle;
            const isDone = s.incomplete === 0;

            return (
              <div
                key={s.weekNumber}
                className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg transition-colors ${
                  isActive ? "bg-violet-50" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                  )}
                  <span
                    className={`text-[11px] font-semibold truncate ${
                      isActive ? "text-violet-700" : "text-slate-600"
                    }`}
                  >
                    {s.weekTitle}
                  </span>
                </div>
                <span
                  className={`text-[11px] font-bold shrink-0 tabular-nums ${
                    isActive
                      ? "text-violet-600"
                      : isDone
                      ? "text-emerald-500"
                      : "text-slate-400"
                  }`}
                >
                  {isDone ? (
                    <svg
                      className="w-3 h-3 text-emerald-500"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  ) : (
                    `${s.incomplete} left`
                  )}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── RightSidebar ─────────────────────────────────────────── */
export default function RightSidebar({
  categoryStats,
  weekTitle,
  weekStats,
}: RightSidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0 flex flex-col lg:overflow-y-auto lg:h-full" />
  );
}
