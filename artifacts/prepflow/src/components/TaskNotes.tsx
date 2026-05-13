import { useState, useRef, useCallback } from "react";
import { type TaskNote } from "../hooks/usePlanOverrides";

interface TaskNotesProps {
  taskId: string;
  note: TaskNote | null;
  onSave: (note: TaskNote) => void;
}

export default function TaskNotes({ note, onSave }: TaskNotesProps) {
  const [text, setText] = useState(note?.text ?? "");
  const [images, setImages] = useState<string[]>(note?.images ?? []);
  const [isDirty, setIsDirty] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTextChange = (val: string) => {
    setText(val);
    setIsDirty(true);
  };

  const handleSave = () => {
    onSave({ text, images });
    setIsDirty(false);
  };

  const processFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setImages((prev) => [...prev, dataUrl]);
      setIsDirty(true);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach(processFile);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    Array.from(e.dataTransfer.files).forEach(processFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setIsDirty(true);
  };

  return (
    <div className="mt-2 ml-[23px] border border-[#e2e8f0] rounded-[6px] bg-[#f8fafc] overflow-hidden">
      <div className="px-3 py-2 border-b border-[#e8f1f9] bg-white flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-[#64748b]" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h10M3 6.5h10M3 10h6" />
        </svg>
        <span className="text-[12px] font-semibold text-[#64748b] uppercase tracking-wide">Notes</span>
      </div>

      <div className="p-3">
        {/* Text area */}
        <textarea
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Add notes for this task…"
          className="w-full text-[14px] text-[#334155] placeholder-[#94a3b8] resize-none bg-white border border-[#e2e8f0] rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#2f6bff] transition-colors leading-relaxed"
          rows={3}
        />

        {/* Image thumbnails */}
        {images.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {images.map((src, i) => (
              <div key={i} className="relative group">
                <img
                  src={src}
                  alt={`Note image ${i + 1}`}
                  className="w-20 h-20 object-cover rounded-[4px] border border-[#e2e8f0]"
                />
                <button
                  onClick={() => removeImage(i)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#ef4444] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Remove image"
                >
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M2 2l8 8M10 2l-8 8" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Drop zone / image add */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`mt-2 border-2 border-dashed rounded-[4px] px-3 py-2 flex items-center gap-2 cursor-pointer transition-colors ${
            isDragging
              ? "border-[#2f6bff] bg-[#eff4ff]"
              : "border-[#d1d9e0] hover:border-[#94a3b8] bg-white"
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <svg className="w-4 h-4 text-[#94a3b8] shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="12" height="10" rx="1.5" />
            <path d="M2 10l3.5-3.5a1 1 0 011.4 0L9 8l1.5-1.5a1 1 0 011.4 0L14 9" />
            <circle cx="5.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span className="text-[13px] text-[#94a3b8]">
            {isDragging ? "Drop image here" : "Add image — click or drag & drop"}
          </span>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Save button */}
        <div className="flex justify-end mt-2.5">
          <button
            onClick={handleSave}
            disabled={!isDirty}
            className={`text-[13px] font-medium px-3 py-1.5 rounded-[4px] transition-colors focus:outline-none ${
              isDirty
                ? "bg-[#2f6bff] text-white hover:bg-[#2560ee]"
                : "bg-[#e8f1f9] text-[#94a3b8] cursor-default"
            }`}
          >
            Save notes
          </button>
        </div>
      </div>
    </div>
  );
}
