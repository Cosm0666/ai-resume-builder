import type { Resume } from "../../types/resume";

function Summary({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
    function handleSummaryChange(e: React.ChangeEvent<HTMLInputElement>) {
        setResume({
            ...resume,
            personal: {
                ...resume.personal,
                summary: e.target.value,
            }
        })
    }

    return (
        <div className="summary">
            <label htmlFor="">Summary</label>
            <input type="text" value={resume.personal.summary} onChange={handleSummaryChange}/>
        </div>
    );
}

export default Summary;
