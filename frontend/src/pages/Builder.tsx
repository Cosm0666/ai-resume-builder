import { useState } from "react";
import ResumeForm from "../components/ResumeForm/ResumeForm";
import ResumePreview from "../components/ResumePreview/ResumePreview";
import type { Resume } from "../types/resume";

function Builder() {
  const [resume, setResume] = useState<Resume>({
    personal: {
      fullName: "",
      email: "",
      phone: 0,
      github: "",
      linkedin: "",
      website: "",
    },
  });

  return (
    <div className="builder">
      <ResumeForm resume={resume} setResume={setResume} />
      <ResumePreview resume={resume} />
    </div>
  );       
}

export default Builder;
