import { useState } from "react";
import ResumeForm from "../../components/ResumeForm";
import ResumePreview from "../../components/ResumePreview";
import { Resume } from "../../types/resume";


function Builder(){
    const [resume, setResume] = useState<Resume>({
        personal: {
            fullName: "",
            email: "",
        },
    });


    return (
        <div className="builder">
            <ResumeForm resume={resume} setResume={setResume}/>
            <ResumePreview resume={resume}/>
        </div>
    )
}