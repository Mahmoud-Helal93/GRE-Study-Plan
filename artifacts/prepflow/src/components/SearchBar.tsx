import { type TaskFilter, FILTER_OPTIONS } from "../lib/filters";
export type { TaskFilter };

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  activeFilter: TaskFilter;
  onFilterChange: (f: TaskFilter) => void;
  isSearching: boolean;
}

export default function SearchBar({
  query,
  onQueryChange,
  activeFilter,
  onFilterChange,
  isSearching,
}: SearchBarProps) {
  return (
    <div className="px-5 lg:px-6 pt-2 pb-3 shrink-0">
      {/* Search input — mobile only (desktop shows it in the header) */}
      <div className="lg:hidden relative mb-3">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-slate-400 pointer-events-none"
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="7" cy="7" r="5" />
          <path d="M11 11l3 3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search tasks, categories, resources…"
          className="w-full pl-10 pr-9 py-2.5 text-sm bg-white border border-gray-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100/70 transition-all duration-150 font-medium shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all focus:outline-none"
            aria-label="Clear search"
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 2l8 8M10 2l-8 8" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter chips */}
      {!isSearching && (
        <div className="flex flex-wrap gap-1.5">
          {FILTER_OPTIONS.map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`text-[11px] font-bold rounded-full px-3 py-1.5 uppercase tracking-wide transition-all duration-100 ${
                activeFilter === f
                  ? "bg-violet-600 text-white shadow-sm shadow-violet-200"
                  : "bg-white border border-gray-200 text-slate-500 hover:border-violet-200 hover:text-violet-600 hover:bg-violet-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {isSearching && (
        <div className="flex items-center gap-2">
          <svg className="w-3 h-3 text-slate-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="5.5" cy="5.5" r="3.5" />
            <path d="M9 9l2 2" />
          </svg>
          <p className="text-xs text-slate-400 font-medium">
            Searching across all weeks and days
          </p>
          <button
            onClick={() => onQueryChange("")}
            className="ml-auto text-[10px] font-bold text-violet-600 hover:text-violet-800 bg-violet-50 hover:bg-violet-100 px-2 py-0.5 rounded-full transition-all"
          >
            ← Clear
          </button>
        </div>
      )}
    </div>
  );
}
