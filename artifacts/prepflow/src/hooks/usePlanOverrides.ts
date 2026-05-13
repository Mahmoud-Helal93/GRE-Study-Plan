import { useState, useCallback } from "react";
import { type PlanBlock, type PlanTask } from "../data/prepFlowPlan";

/* ── Types ─────────────────────────────────────────────────────── */

export interface TaskNote {
  text: string;
  images: string[]; // base64 data URLs
}

export interface CustomTask {
  id: string;
  title: string;
  optional: boolean;
  type: PlanTask["type"];
  links: { text: string; url: string }[];
  isCustom: true;
}

interface OverridesData {
  deletedTaskIds: string[];
  editedTasks: Record<string, { title: string }>;
  sectionOrders: Record<string, string[]>; // key: "blockId::sectionIdx"
  customTasks: Record<string, CustomTask[]>; // key: "blockId::sectionIdx"
  taskNotes: Record<string, TaskNote>; // key: taskId
}

const OVERRIDES_KEY = "prepflow-plan-overrides-v1";

function loadOverrides(): OverridesData {
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw);
    return {
      deletedTaskIds: parsed.deletedTaskIds ?? [],
      editedTasks: parsed.editedTasks ?? {},
      sectionOrders: parsed.sectionOrders ?? {},
      customTasks: parsed.customTasks ?? {},
      taskNotes: parsed.taskNotes ?? {},
    };
  } catch {
    return empty();
  }
}

function empty(): OverridesData {
  return {
    deletedTaskIds: [],
    editedTasks: {},
    sectionOrders: {},
    customTasks: {},
    taskNotes: {},
  };
}

function save(data: OverridesData): void {
  try {
    localStorage.setItem(OVERRIDES_KEY, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}

function sectionKey(blockId: string, sectionIdx: number): string {
  return `${blockId}::${sectionIdx}`;
}

/* ── applyOverrides: merges overrides into a plan copy ─────────── */
export function applyOverrides(plan: PlanBlock[], data: OverridesData): PlanBlock[] {
  const deleted = new Set(data.deletedTaskIds);
  return plan.map((block) => ({
    ...block,
    sections: block.sections.map((section, sIdx) => {
      const key = sectionKey(block.id, sIdx);
      const custom = (data.customTasks[key] ?? []) as PlanTask[];

      // Merge base tasks + custom, apply edits, filter deleted
      let tasks: PlanTask[] = [...section.tasks, ...custom]
        .filter((t) => !deleted.has(t.id))
        .map((t) =>
          data.editedTasks[t.id] ? { ...t, title: data.editedTasks[t.id].title } : t
        );

      // Apply custom order if present
      const order = data.sectionOrders[key];
      if (order && order.length > 0) {
        const taskMap = new Map(tasks.map((t) => [t.id, t]));
        const ordered: PlanTask[] = [];
        order.forEach((id) => {
          const t = taskMap.get(id);
          if (t) ordered.push(t);
        });
        // Append any tasks not in the order list (e.g. newly added)
        tasks.forEach((t) => {
          if (!order.includes(t.id)) ordered.push(t);
        });
        tasks = ordered;
      }

      return { ...section, tasks };
    }),
  }));
}

/* ── Hook ──────────────────────────────────────────────────────── */
export function usePlanOverrides() {
  const [overrides, setOverrides] = useState<OverridesData>(() => loadOverrides());

  const update = useCallback((updater: (prev: OverridesData) => OverridesData) => {
    setOverrides((prev) => {
      const next = updater(prev);
      save(next);
      return next;
    });
  }, []);

  /* Delete a task */
  const deleteTask = useCallback(
    (taskId: string) => {
      update((prev) => ({
        ...prev,
        deletedTaskIds: [...prev.deletedTaskIds.filter((id) => id !== taskId), taskId],
      }));
    },
    [update]
  );

  /* Edit a task title */
  const editTask = useCallback(
    (taskId: string, title: string) => {
      update((prev) => ({
        ...prev,
        editedTasks: { ...prev.editedTasks, [taskId]: { title } },
      }));
    },
    [update]
  );

  /* Move a task up or down within a section */
  const moveTask = useCallback(
    (blockId: string, sectionIdx: number, taskId: string, direction: "up" | "down", currentOrder: string[]) => {
      const key = sectionKey(blockId, sectionIdx);
      const order = [...currentOrder];
      const idx = order.indexOf(taskId);
      if (idx === -1) return;
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= order.length) return;
      [order[idx], order[swapIdx]] = [order[swapIdx], order[idx]];
      update((prev) => ({
        ...prev,
        sectionOrders: { ...prev.sectionOrders, [key]: order },
      }));
    },
    [update]
  );

  /* Add a custom task to a section */
  const addTask = useCallback(
    (blockId: string, sectionIdx: number, title: string, taskType: PlanTask["type"] = "other") => {
      const key = sectionKey(blockId, sectionIdx);
      const id = `custom-${blockId}-${sectionIdx}-${Date.now()}`;
      const newTask: CustomTask = {
        id,
        title,
        optional: false,
        type: taskType,
        links: [],
        isCustom: true,
      };
      update((prev) => ({
        ...prev,
        customTasks: {
          ...prev.customTasks,
          [key]: [...(prev.customTasks[key] ?? []), newTask],
        },
      }));
    },
    [update]
  );

  /* Get note for a task */
  const getNote = useCallback(
    (taskId: string): TaskNote | null => {
      return overrides.taskNotes[taskId] ?? null;
    },
    [overrides.taskNotes]
  );

  /* Set/update note for a task */
  const setNote = useCallback(
    (taskId: string, note: TaskNote) => {
      update((prev) => ({
        ...prev,
        taskNotes: { ...prev.taskNotes, [taskId]: note },
      }));
    },
    [update]
  );

  return {
    overrides,
    applyOverrides: (plan: PlanBlock[]) => applyOverrides(plan, overrides),
    deleteTask,
    editTask,
    moveTask,
    addTask,
    getNote,
    setNote,
  };
}
