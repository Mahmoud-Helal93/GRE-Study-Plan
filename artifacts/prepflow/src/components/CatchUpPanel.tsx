import { PlanBlock } from "../data/prepFlowPlan";

interface CatchUpPanelProps {
  incompleteOverall: number;
  incompleteWeek: number;
  nextBlock: PlanBlock | null;
  onGoToNext: () => void;
}

export default function CatchUpPanel({
  incompleteOverall,
  incompleteWeek,
  nextBlock,
  onGoToNext,
}: CatchUpPanelProps) {
  const allDone = incompleteOverall === 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_4px_0_rgba(0,0,0,0.04)] p-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3">
        Catch-Up
      </p>

      {allDone ? (
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center">
          <p className="text-sm font-bold text-emerald-700 tracking-tight">All tasks complete!</p>
          <p className="text-[11px] text-emerald-500 mt-1 font-medium">Incredible work 🎉</p>
        </div>
      ) : (
        <>
          {/* Stat tiles */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="rounded-xl bg-slate-50 border border-gray-100 px-3 py-2.5 text-center">
              <p className="text-[26px] font-bold text-slate-800 tabular-nums leading-none tracking-tight">
                {incompleteOverall}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1.5">
                total left
              </p>
            </div>
            <div className="rounded-xl bg-violet-50 border border-violet-100 px-3 py-2.5 text-center">
              <p className="text-[26px] font-bold text-violet-700 tabular-nums leading-none tracking-tight">
                {incompleteWeek}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-violet-400 mt-1.5">
                this week
              </p>
            </div>
          </div>

          {/* Up Next */}
          {nextBlock && (
            <div className="rounded-xl border border-gray-100 bg-slate-50 px-3 py-2.5 mb-3">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.13em] mb-1.5">
                Up Next
              </p>
              <p className="text-[12px] font-bold text-slate-800 leading-snug line-clamp-2 tracking-tight">
                {nextBlock.title}
              </p>
              <p className="text-[9px] text-slate-400 font-semibold mt-1 uppercase tracking-wider">
                {nextBlock.label}
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={onGoToNext}
            disabled={!nextBlock}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 active:bg-violet-700 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none text-white text-[11px] font-bold py-2.5 px-3 transition-all duration-150 shadow-sm shadow-violet-200/80"
          >
            Go to Next Incomplete
            <svg
              className="w-3.5 h-3.5 shrink-0"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
