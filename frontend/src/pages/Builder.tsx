import { useState } from "react";
import ResumeForm from "../components/ResumeForm/ResumeForm";
import ResumePreview from "../components/ResumePreview/ResumePreview";
import type { Resume } from "../types/resume";


function Builder() {
  const [resume, setResume] = useState<Resume>({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      summary: "",
      github: "",
      linkedin: "",
      website: "",
    },
    experience: {
      title: "",
      company: "",
      location: "",
      startDate: new Date,
      endDate: undefined,
      description: [],
    },
    education: {
      title: "",
      school: "",
      location: "",
      startDate: undefined,
      endDate: undefined,
      description: [],
    },
    skills: [],
    projects: [],
  });

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="rounded-[2rem] border border-slate-200 bg-white px-8 py-8 shadow-sm">
          <h1 className="text-4xl font-bold tracking-tight">Resume Builder</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Use o formulário à esquerda para montar seu currículo e acompanhe a prévia no formato ATS à direita.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <ResumeForm resume={resume} setResume={setResume} />
          </section>
          <section>
            <ResumePreview resume={resume} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Builder;
