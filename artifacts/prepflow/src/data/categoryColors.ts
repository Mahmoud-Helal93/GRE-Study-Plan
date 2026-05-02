export interface CategoryColor {
  bg: string;
  text: string;
  dot: string;
  bar: string;
}

const PALETTE: CategoryColor[] = [
  { bg: "bg-blue-50",    text: "text-blue-700",   dot: "bg-blue-500",   bar: "bg-blue-400" },
  { bg: "bg-violet-50",  text: "text-violet-700", dot: "bg-violet-500", bar: "bg-violet-400" },
  { bg: "bg-amber-50",   text: "text-amber-700",  dot: "bg-amber-500",  bar: "bg-amber-400" },
  { bg: "bg-rose-50",    text: "text-rose-700",   dot: "bg-rose-500",   bar: "bg-rose-400" },
  { bg: "bg-emerald-50", text: "text-emerald-700",dot: "bg-emerald-500",bar: "bg-emerald-400" },
  { bg: "bg-sky-50",     text: "text-sky-700",    dot: "bg-sky-500",    bar: "bg-sky-400" },
  { bg: "bg-fuchsia-50", text: "text-fuchsia-700",dot: "bg-fuchsia-500",bar: "bg-fuchsia-400" },
  { bg: "bg-lime-50",    text: "text-lime-700",   dot: "bg-lime-500",   bar: "bg-lime-400" },
];

const NAMED: Record<string, CategoryColor> = {
  "Quant":          PALETTE[0],
  "Verbal":         PALETTE[1],
  "Writing":        PALETTE[2],
  "Practice Test":  PALETTE[3],
  "Review":         PALETTE[4],
  "Getting Started":PALETTE[5],
};

export function getCategoryColor(category: string): CategoryColor {
  if (NAMED[category]) return NAMED[category];
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) & 0xffffffff;
  return PALETTE[Math.abs(hash) % PALETTE.length];
}
