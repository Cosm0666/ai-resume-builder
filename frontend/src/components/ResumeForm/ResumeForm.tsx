import type React from "react";
import type { Resume } from "../../types/resume";

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
        phone: parseInt(e.target.value),
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
    <>
      <label>
        Nome:
        <input
          required
          type="text"
          placeholder="Seu nome"
          value={resume.personal.fullName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Email:
        <input
          required
          type="email"
          placeholder="Email"
          value={resume.personal.email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Telefone:
        <input required type="tel" placeholder="(00) 0000-0000" 
        onChange={handlePhoneChange}
        />
      </label>
      <label>
        Github:
        <input
          type="text"
          placeholder="https://github.com/username"
          value={resume.personal.github}
          onChange={handleGithubChange}

        />
      </label>
      <label htmlFor="">
        {" "}
        Linkedin
        <input value={resume.personal.linkedin} 
        onChange={handleLinkedinChange}
        />
      </label>
      <label>
        Website:
        <input
          type="text"
          placeholder="https://www.website.com.br"
          value={resume.personal.website}
          onChange={handleWebsiteChange}
        />
      </label>
    </>
  );
}

export default ResumeForm;
