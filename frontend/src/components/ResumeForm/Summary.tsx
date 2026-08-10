import type React from "react";
import type { Resume } from "../../types/resume";

function Summary({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  function handleSummaryChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        summary: e.target.value,
      },
    });
  }

  return (
    <textarea
      placeholder="Escreva um breve resumo profissional para o seu currículo"
      className="min-h-[9rem] w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-slate-500"
      value={resume.personal.summary}
      onChange={handleSummaryChange}
    />
  );
}

export default Summary;
