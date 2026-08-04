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
  });

  return (
    <main className="max-w-7xl mx-auto my-8 border border-gray-300 p-8 rounded-lg">
      <div className="flex gap-8">
        <section className="flex-1">
          <ResumeForm resume={resume} setResume={setResume} />
        </section>
        <section className="flex-1">
          <ResumePreview resume={resume} />
        </section>
      </div>
    </main>
  );
}

export default Builder;
