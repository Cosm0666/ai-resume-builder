import type React from "react";
import type { Resume } from "../../types/resume";

function Experience({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setResume({
      ...resume,
      experience: {
        ...resume.experience,
        title: name === "title" ? value : resume.experience.title,
        company: name === "company" ? value : resume.experience.company,
        location: name === "location" ? value : resume.experience.location,
        startDate:
          name === "startDate"
            ? value
              ? new Date(value)
              : resume.experience.startDate
            : resume.experience.startDate,
        endDate:
          name === "endDate"
            ? value
              ? new Date(value)
              : undefined
            : resume.experience.endDate,
        description: resume.experience.description,
      },
    });
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setResume({
      ...resume,
      experience: {
        ...resume.experience,
        description: e.target.value.split("\n").filter(Boolean),
      },
    });
  }

  const startDateValue = resume.experience.startDate
    ? resume.experience.startDate.toISOString().split("T")[0]
    : "";
  const endDateValue = resume.experience.endDate
    ? resume.experience.endDate.toISOString().split("T")[0]
    : "";

  return (
    <form className="grid gap-4 text-sm text-slate-700">
      <label className="flex flex-col gap-2">
        Cargo
        <input
          className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          type="text"
          placeholder="Título da experiência"
          name="title"
          value={resume.experience.title}
          onChange={handleFieldChange}
        />
      </label>
      <label className="flex flex-col gap-2">
        Empresa
        <input
          className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          type="text"
          placeholder="Nome da empresa"
          name="company"
          value={resume.experience.company}
          onChange={handleFieldChange}
        />
      </label>
      <label className="flex flex-col gap-2">
        Localização
        <input
          className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          type="text"
          placeholder="Localização"
          name="location"
          value={resume.experience.location}
          onChange={handleFieldChange}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          Data de início
          <input
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
            type="date"
            name="startDate"
            value={startDateValue}
            onChange={handleFieldChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          Data de término
          <input
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
            type="date"
            name="endDate"
            value={endDateValue}
            onChange={handleFieldChange}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        Descrição
        <textarea
          className="min-h-[9rem] rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          placeholder="Liste responsabilidades e resultados, um por linha"
          name="description"
          value={resume.experience.description.join("\n")}
          onChange={handleDescriptionChange}
        />
      </label>
    </form>
  );
}

export default Experience;
