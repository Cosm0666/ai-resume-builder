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
      placeholder="Sobre mim: "
      className="flex p-4 rounded-lg border border-gray-300 w-full h-3.5xl"
      name=""
      id=""
      value={resume.personal.summary}
      onChange={handleSummaryChange}
    />
  );
}

export default Summary;
