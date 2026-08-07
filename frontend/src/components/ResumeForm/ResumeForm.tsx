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
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-3xl font-bold">Formulário de Resumo</h1>
      <form>
        <label className="flex gap-2">
          Nome:
          <input
            required
            type="text"
            placeholder="Seu nome"
            value={resume.personal.fullName}
            onChange={handleNameChange}
          />
        </label>
        <label className="flex gap-2">
          Email:
          <input
            required
            type="text"
            placeholder="Email"
            value={resume.personal.fullName}
            onChange={handleEmailChange}
          />
        </label>
        <label className="flex gap-2">
          Telefone:
          <input
            required
            type="tel"
            placeholder="(00) 0000-0000"
            onChange={handlePhoneChange}
          />
        </label>
        <label className="flex gap-2">
          Github:
          <input
            className="min-w-2xs"
            type="text"
            placeholder="https://github.com/username"
            value={resume.personal.github}
            onChange={handleGithubChange}
          />
        </label>
        <label htmlFor="" className="flex gap-2 ">
          {" "}
          Linkedin:
          <input
            placeholder="www.linkedin.com"
            value={resume.personal.linkedin}
            onChange={handleLinkedinChange}
          />
        </label>
        <label className="flex gap-2">
          Website:
          <input
            type="text"
            placeholder="https://www.website.com.br"
            value={resume.personal.website}
            onChange={handleWebsiteChange}
          />
        </label>
      </form>
      <label>
        Sobre mim:
        <Summary resume={resume} setResume={setResume} />
      </label>

      <Experience resume={resume} setResume={setResume} />
      <EducationSection resume={resume} setResume={setResume} />
    </div>
  );
}

export default ResumeForm;
