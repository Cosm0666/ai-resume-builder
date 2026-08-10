import type React from "react";
import type { Resume } from "../../types/resume";
import Summary from "./Summary";
import Experience from "./ExperienceSection";
import EducationSection from "./EducationSection";

function ResumeForm({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        fullName: e.target.value,
      },
    });
  }
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        email: e.target.value,
      },
    });
  }
  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        phone: e.target.value,
      },
    });
  }

  function handleGithubChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        github: e.target.value,
      },
    });
  }

  function handleLinkedinChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        linkedin: e.target.value,
      },
    });
  }

  function handleWebsiteChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        website: e.target.value,
      },
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Formulário de Resumo</h1>
        <p className="mt-2 text-sm text-slate-600">Preencha seus dados e veja o currículo atualizar em tempo real.</p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Informações pessoais</h2>
        <div className="mt-5 grid gap-4">
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Nome completo
            <input
              required
              type="text"
              placeholder="Seu nome"
              className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              value={resume.personal.fullName}
              onChange={handleNameChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Email
            <input
              required
              type="email"
              placeholder="email@exemplo.com"
              className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              value={resume.personal.email}
              onChange={handleEmailChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Telefone
            <input
              required
              type="tel"
              placeholder="(00) 00000-0000"
              className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              value={resume.personal.phone}
              onChange={handlePhoneChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Github
            <input
              type="text"
              placeholder="https://github.com/username"
              className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              value={resume.personal.github}
              onChange={handleGithubChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Linkedin
            <input
              type="text"
              placeholder="https://www.linkedin.com/in/username"
              className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              value={resume.personal.linkedin}
              onChange={handleLinkedinChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Website
            <input
              type="text"
              placeholder="https://www.website.com"
              className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
              value={resume.personal.website}
              onChange={handleWebsiteChange}
            />
          </label>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Resumo profissional</h2>
        <div className="mt-4">
          <Summary resume={resume} setResume={setResume} />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Experiência</h2>
        <div className="mt-5">
          <Experience resume={resume} setResume={setResume} />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Educação</h2>
        <div className="mt-5">
          <EducationSection resume={resume} setResume={setResume} />
        </div>
      </section>
    </div>
  );
}

export default ResumeForm;
