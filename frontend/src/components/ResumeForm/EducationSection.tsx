import type React from "react";
import type { Resume } from "../../types/resume";

function EducationSection({
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
      education: {
        ...resume.education,
        title: name === "title" ? value : resume.education.title,
        school: name === "school" ? value : resume.education.school,
        location: name === "location" ? value : resume.education.location,
        startDate:
          name === "startDate"
            ? value
              ? new Date(value)
              : resume.education.startDate
            : resume.education.startDate,
        endDate:
          name === "endDate"
            ? value
              ? new Date(value)
              : undefined
            : resume.education.endDate,
        description: resume.education.description,
      },
    });
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setResume({
      ...resume,
      education: {
        ...resume.education,
        description: e.target.value.split("\n").filter(Boolean),
      },
    });
  }

  const startDateValue = resume.education.startDate
    ? resume.education.startDate.toISOString().split("T")[0]
    : "";
  const endDateValue = resume.education.endDate
    ? resume.education.endDate.toISOString().split("T")[0]
    : "";

  return (
    <form className="grid gap-4 text-sm text-slate-700 rounded-2xl border border-slate-200 bg-white p-4">
      <label className="flex flex-col gap-2">
        Grau/Curso
        <input
          className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          type="text"
          placeholder="Grau, curso ou área de estudo"
          name="title"
          value={resume.education.title}
          onChange={handleFieldChange}
        />
      </label>
      <label className="flex flex-col gap-2">
        Instituição
        <input
          className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          type="text"
          placeholder="Nome da instituição"
          name="school"
          value={resume.education.school}
          onChange={handleFieldChange}
        />
      </label>
      <label className="flex flex-col gap-2">
        Localização
        <input
          className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          type="text"
          placeholder="Cidade, país"
          name="location"
          value={resume.education.location}
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
          placeholder="Liste realizações e disciplinas relevantes"
          name="description"
          value={resume.education.description.join("\n")}
          onChange={handleDescriptionChange}
        />
      </label>
    </form>
  );
}

export default EducationSection;
