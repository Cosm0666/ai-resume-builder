import type { Resume } from "../../types/resume";
import Header from "./Header";

function formatDate(value: Date | undefined) {
  if (!value) {
    return "Presente";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(value);
}

function ResumePreview({ resume }: { resume: Resume }) {
  const experienceItems = resume.experience.description.filter(Boolean);
  const educationItems = resume.education.description.filter(Boolean);

  const contactItems = [
    resume.personal.email,
    resume.personal.phone,
    resume.personal.github ? `GitHub: ${resume.personal.github}` : "",
    resume.personal.linkedin ? `LinkedIn: ${resume.personal.linkedin}` : "",
    resume.personal.website,
  ].filter(Boolean);

  return (
    <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <Header />

      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Resumo ATS</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          {resume.personal.fullName || "Nome Sobrenome"}
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {contactItems.length > 0 ? contactItems.join(" · ") : "email@exemplo.com · (00) 00000-0000"}
        </p>
      </div>

      {resume.personal.summary ? (
        <section className="mb-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Resumo Profissional</h2>
          <p className="text-sm leading-7 text-slate-700">{resume.personal.summary}</p>
        </section>
      ) : null}

      <section className="mb-6">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Experiência</h2>
        <div className="space-y-5 rounded-3xl bg-slate-50 p-5">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  {resume.experience.title || "Cargo/Título"}
                </p>
                <p className="text-sm text-slate-600">
                  {resume.experience.company || "Empresa"} · {resume.experience.location || "Localização"}
                </p>
              </div>
              <p className="text-sm text-slate-500">
                {formatDate(resume.experience.startDate)} — {resume.experience.endDate ? formatDate(resume.experience.endDate) : "Presente"}
              </p>
            </div>

            {experienceItems.length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {experienceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-slate-500">Descreva suas principais funções e resultados.</p>
            )}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Educação</h2>
        <div className="space-y-5 rounded-3xl bg-slate-50 p-5">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  {resume.education.title || "Curso / Grau"}
                </p>
                <p className="text-sm text-slate-600">
                  {resume.education.school || "Instituição"} · {resume.education.location || "Localização"}
                </p>
              </div>
              <p className="text-sm text-slate-500">
                {formatDate(resume.education.startDate)} — {resume.education.endDate ? formatDate(resume.education.endDate) : "Presente"}
              </p>
            </div>

            {educationItems.length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {educationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-slate-500">Inclua disciplinas, projetos ou notas relevantes.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResumePreview;
