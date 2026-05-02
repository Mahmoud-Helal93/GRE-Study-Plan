interface HeaderProps {
  onReset: () => void;
}

export default function Header({ onReset }: HeaderProps) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3 min-w-0">
        {/* Logo mark */}
        <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 4h10M3 8h7M3 12h5" />
          </svg>
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-lg font-bold text-white tracking-tight leading-none">
              PREPFLOW
            </h1>
            <span className="inline-flex items-center rounded-md bg-violet-600/20 border border-violet-500/30 px-2 py-0.5 text-[10px] font-bold text-violet-300 tracking-widest uppercase shrink-0">
              8-Week GRE Plan
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5 font-medium tracking-wide">
            Two-Month Progress Tracker
          </p>
        </div>
      </div>

      <button
        onClick={onReset}
        className="shrink-0 text-[11px] font-semibold text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 border border-slate-700 hover:border-rose-400/30 rounded-lg px-3 py-1.5 transition-all duration-150 uppercase tracking-wider ml-3"
        title="Reset all progress"
      >
        Reset
      </button>
    </header>
  );
}
