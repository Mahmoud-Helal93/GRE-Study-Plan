import { useMemo } from "react";
import { SearchResult, PlanBlock } from "../data/prepFlowPlan";
import { getCategoryColor } from "../data/categoryColors";

interface SearchResultsProps {
  results: SearchResult[];
  completedIds: Set<string>;
  onSelectBlock: (blockId: string) => void;
  query: string;
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const q = query.trim();
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-100 text-yellow-800 rounded px-0.5 not-italic font-semibold">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export default function SearchResults({
  results,
  completedIds,
  onSelectBlock,
  query,
}: SearchResultsProps) {
  // Group results by block, preserving plan order
  const grouped = useMemo(() => {
    const map = new Map<string, { block: PlanBlock; results: SearchResult[] }>();
    for (const r of results) {
      if (!map.has(r.block.id)) {
        map.set(r.block.id, { block: r.block, results: [] });
      }
      map.get(r.block.id)!.results.push(r);
    }
    return Array.from(map.values());
  }, [results]);

  if (results.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="9" r="6" />
              <path strokeLinecap="round" d="M15 15l3 3" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-slate-500">No results for "{query}"</p>
          <p className="text-xs text-slate-400 mt-1">Try a different task title, category, or resource name</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:flex-1 lg:overflow-y-auto p-5">
      <p className="text-xs font-semibold text-slate-400 mb-4">
        {results.length} result{results.length !== 1 ? "s" : ""} across {grouped.length} block{grouped.length !== 1 ? "s" : ""}
      </p>

      <div className="flex flex-col gap-4">
        {grouped.map(({ block, results: blockResults }) => (
          <div key={block.id}>
            {/* Block header — clickable */}
            <button
              onClick={() => onSelectBlock(block.id)}
              className="w-full text-left mb-2 flex items-center gap-2 group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {block.week === 0 ? "Before You Begin" : `Week ${block.week}`}
                </p>
                <p className="text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors leading-tight">
                  {highlight(block.title, query)}
                </p>
              </div>
              <span className="shrink-0 text-[10px] font-semibold text-indigo-400 bg-indigo-50 rounded-full px-2 py-0.5">
                {blockResults.length} match{blockResults.length !== 1 ? "es" : ""}
              </span>
            </button>

            {/* Matched tasks */}
            <div className="flex flex-col gap-1.5 pl-1">
              {blockResults.map((r, i) => {
                const colors = getCategoryColor(r.section.category);
                const completed = completedIds.has(r.task.id);
                return (
                  <button
                    key={i}
                    onClick={() => onSelectBlock(r.block.id)}
                    className={`w-full text-left flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-all duration-100 group ${
                      completed
                        ? "border-slate-100 bg-slate-50 opacity-70"
                        : "border-slate-100 bg-white hover:border-indigo-100 hover:shadow-sm"
                    }`}
                  >
                    {/* Completion dot */}
                    <div className={`mt-0.5 w-3 h-3 rounded-full shrink-0 flex items-center justify-center ${completed ? "bg-indigo-500" : "border-2 border-slate-300"}`}>
                      {completed && (
                        <svg className="w-1.5 h-1.5 text-white" viewBox="0 0 6 6" fill="none">
                          <path d="M1 3l1.5 1.5L5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs leading-snug ${completed ? "line-through text-slate-400" : "text-slate-700"}`}>
                        {highlight(r.task.title, query)}
                      </p>
                      <span className={`inline-flex mt-1 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.bg} ${colors.text}`}>
                        {highlight(r.section.category, query)}
                      </span>
                    </div>
                    <svg className="w-3 h-3 text-slate-300 group-hover:text-indigo-400 shrink-0 mt-0.5 transition-colors" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 2l4 4-4 4" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
