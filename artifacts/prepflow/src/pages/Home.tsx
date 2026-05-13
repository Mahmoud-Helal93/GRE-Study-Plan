import { Link } from "wouter";
import { useMemo } from "react";
import { prepFlowPlan, getOverallProgress } from "../data/prepFlowPlan";

const STORAGE_KEY = "prepflow-progress-full-two-month-plan";

function loadProgress(): Record<string, boolean> {
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

export default function Home() {
  const completedTasks = useMemo(() => loadProgress(), []);
  const completedIds = useMemo(
    () => new Set(Object.keys(completedTasks).filter((k) => completedTasks[k])),
    [completedTasks]
  );
  const overall = useMemo(() => getOverallProgress(prepFlowPlan, completedIds), [completedIds]);
  const hasStarted = overall.completed > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-[17px] font-bold text-[#172033]">PrepFlow</span>
          <Link
            href="/plan"
            className="text-[14px] font-medium text-[#1a6edf] hover:underline"
          >
            Go to Study Plan →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-[780px] mx-auto px-6 pt-20 pb-24 text-center">
        <p className="text-[13px] font-semibold text-[#1a6edf] uppercase tracking-wider mb-4">
          GregMat Two-Month GRE Study Plan
        </p>

        <h1 className="text-[38px] sm:text-[46px] font-bold text-[#172033] leading-[1.15] mb-5">
          Your Complete GRE<br />
          Study Roadmap
        </h1>

        <p className="text-[17px] text-[#475569] leading-[1.8] max-w-[560px] mx-auto mb-10">
          A structured 8-week curriculum built on GregMat's proven method.
          Daily tasks, video lessons, and practice organized into one clear plan.
        </p>

        {/* Progress bar (shown only if user has started) */}
        {hasStarted && (
          <div className="max-w-sm mx-auto mb-8">
            <div className="flex items-center justify-between text-[13px] text-[#64748b] mb-2">
              <span>Your progress</span>
              <span className="font-semibold text-[#172033]">{overall.pct}% complete</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#e8f1f9] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#2f6bff] transition-all duration-500"
                style={{ width: `${overall.pct}%` }}
              />
            </div>
            <p className="text-[12px] text-[#94a3b8] mt-1.5 tabular-nums">
              {overall.completed} of {overall.total} required tasks completed
            </p>
          </div>
        )}

        <Link
          href="/plan"
          className="inline-flex items-center gap-2 bg-[#2f6bff] hover:bg-[#2560ee] text-white font-semibold text-[15px] px-7 py-3 rounded-[6px] transition-colors"
        >
          {hasStarted ? "Continue Study Plan" : "Start Study Plan"}
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#e2e8f0] pt-12">
          <div className="text-center">
            <p className="text-[32px] font-bold text-[#172033]">8</p>
            <p className="text-[14px] text-[#64748b] mt-1">Weeks of Study</p>
          </div>
          <div className="text-center border-x border-[#e2e8f0]">
            <p className="text-[32px] font-bold text-[#172033]">{overall.total.toLocaleString()}</p>
            <p className="text-[14px] text-[#64748b] mt-1">Total Tasks</p>
          </div>
          <div className="text-center">
            <p className="text-[32px] font-bold text-[#172033]">Daily</p>
            <p className="text-[14px] text-[#64748b] mt-1">Schedule</p>
          </div>
        </div>

        {/* Plan summary */}
        <div className="mt-16 text-left border border-[#d1e8f5] rounded-[8px] overflow-hidden">
          <div className="bg-[#c7e0f1] px-5 py-3">
            <p className="text-[14px] font-semibold text-[#172033]">What's included</p>
          </div>
          <div className="bg-white divide-y divide-[#e8f1f9]">
            {[
              ["Getting Started", "Set up your materials, accounts, and baseline knowledge"],
              ["Weeks 1–4", "Foundation building: Quant concepts, Verbal strategies, Writing"],
              ["Weeks 5–7", "Targeted practice: mixed sessions, timed drills, review"],
              ["Week 8", "Final review, full practice tests, and exam day preparation"],
            ].map(([title, desc]) => (
              <div key={title} className="px-5 py-3.5 flex items-start gap-4">
                <svg className="w-4 h-4 text-[#1a6edf] mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 8l4 4 7-7" />
                </svg>
                <div>
                  <p className="text-[14px] font-semibold text-[#172033]">{title}</p>
                  <p className="text-[13px] text-[#64748b] mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] py-6">
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
          <span className="text-[13px] text-[#94a3b8]">PrepFlow — GRE Study Tracker</span>
          <Link
            href="/plan"
            className="text-[13px] text-[#1a6edf] hover:underline"
          >
            Open Study Plan
          </Link>
        </div>
      </footer>
    </div>
  );
}
