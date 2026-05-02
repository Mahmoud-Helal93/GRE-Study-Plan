import { getCategoryColor } from "../data/categoryColors";

interface CategoryPanelProps {
  categoryStats: Record<string, { total: number; completed: number }>;
}

export default function CategoryPanel({ categoryStats }: CategoryPanelProps) {
  const entries = Object.entries(categoryStats);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_4px_0_rgba(0,0,0,0.04)] p-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3">
        Category Progress
      </p>

      {entries.length === 0 ? (
        <p className="text-xs text-slate-400 py-2">No data yet</p>
      ) : (
        <div className="flex flex-col gap-3">
          {entries.map(([cat, stats]) => {
            const pct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
            const colors = getCategoryColor(cat);
            const isDone = pct === 100;

            return (
              <div key={cat}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${colors.dot}`} />
                    <span className="text-[11px] font-semibold text-slate-600 truncate">
                      {cat}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-1">
                    <span className="text-[10px] text-slate-400 tabular-nums font-medium">
                      {stats.completed}/{stats.total}
                    </span>
                    <span
                      className={`text-[10px] font-bold tabular-nums w-6 text-right ${
                        isDone ? "text-emerald-600" : "text-violet-600"
                      }`}
                    >
                      {isDone ? "✓" : `${pct}%`}
                    </span>
                  </div>
                </div>
                <div className="h-[3px] w-full rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isDone ? "bg-emerald-500" : colors.bar
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
