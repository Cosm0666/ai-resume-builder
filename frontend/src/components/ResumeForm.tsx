import { Resume } from "../types/resume";

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

  return (
    <input
      type="text"
      placeholder="Your name"
      value={resume.personal.fullName}
      onChange={handleNameChange}
    />
  );
}

export default ResumeForm;
