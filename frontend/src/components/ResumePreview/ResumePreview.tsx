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
    resume.personal.github ? `GitHub: ${resume.personal.github}` : undefined,
    resume.personal.linkedin ? `LinkedIn: ${resume.personal.linkedin}` : undefined,
    resume.personal.website ? `Website: ${resume.personal.website}` : undefined,
  ].filter(Boolean as any);

  return (
    <div className="fixed right-0 top-0 bottom-0 w-2/5 p-8 overflow-y-auto bg-white text-slate-900">
      <Header />

      <div className="mb-6">
        <p className="text-sm uppercase tracking-widest text-slate-600">Resumo ATS</p>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">{resume.personal.fullName || 'Nome Sobrenome'}</h1>
        <p className="mt-2 text-sm text-slate-600">{contactItems.length > 0 ? contactItems.join(' · ') : 'email@exemplo.com · (00) 00000-0000'}</p>
      </div>

      {resume.personal.summary ? (
        <section className="mb-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Resumo Profissional</h2>
          <p className="text-sm leading-relaxed text-slate-800">{resume.personal.summary}</p>
        </section>
      ) : null}

      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">Experiência</h2>

        <div>
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="max-w-[70%]">
                <div className="text-base font-semibold text-slate-900">{resume.experience.title || 'Cargo/Título'}</div>
                <div className="text-sm text-slate-600">{resume.experience.company || 'Empresa'} · {resume.experience.location || 'Localização'}</div>
              </div>
              <div className="text-sm text-slate-600">{formatDate(resume.experience.startDate)} — {formatDate(resume.experience.endDate)}</div>
            </div>

            {experienceItems.length > 0 ? (
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-800 space-y-2">
                {experienceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-600">Descreva suas principais funções e resultados.</p>
            )}
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">Educação</h2>

        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="max-w-[70%]">
              <div className="text-base font-semibold text-slate-900">{resume.education.title || 'Curso / Grau'}</div>
              <div className="text-sm text-slate-600">{resume.education.school || 'Instituição'} · {resume.education.location || 'Localização'}</div>
            </div>
            <div className="text-sm text-slate-600">{formatDate(resume.education.startDate)} — {formatDate(resume.education.endDate)}</div>
          </div>

          {educationItems.length > 0 ? (
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-800 space-y-2">
              {educationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-slate-600">Inclua disciplinas, projetos ou notas relevantes.</p>
          )}
        </div>
      </section>

      {resume.skills && resume.skills.length > 0 ? (
        <section className="mb-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Skills</h2>
          <div className="text-sm text-slate-800">{resume.skills.join(', ')}</div>
        </section>
      ) : null}

      {resume.projects && resume.projects.length > 0 ? (
        <section className="mb-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">Projetos</h2>
          <div>
            {resume.projects.map((p, idx) => (
              <div key={idx} className="mb-4">
                <div className="text-base font-semibold text-slate-900">{p.title}</div>
                {p.description && p.description.length > 0 ? (
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-800 space-y-2">
                    {p.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default ResumePreview;
