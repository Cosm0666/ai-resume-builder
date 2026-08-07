import type { Resume } from "../../types/resume";

function EducationSection({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  function handleEducationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      education: {
        ...resume.education,
        school: e.target.value,
        location: e.target.value,
        startDate: new Date(),
        endDate: new Date(),
        description: e.target.value.split("\n"),
      },
    });
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
        ...resume,
        education: {
          ...resume.education,
          title: e.target.value,
        }
    })
  }

   function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setResume({
        ...resume,
        education: {
          ...resume.education,
          description: e.target.value.split("\n"),
        }
    })
  }
  return (
    <form action="">
      <label htmlFor="education">Education</label>
      <input
        id="education"
        value={resume.education.title}
        onChange={handleTitleChange}
      />
      <br />
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        value={resume.education.school}
        onChange={handleEducationChange}
      />
      <br />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={resume.education.location}
        onChange={handleEducationChange}
      />
      <br />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        value={resume.education.startDate.toISOString().split("T")[0]}
        onChange={handleEducationChange}
      />
      <br />
      <label htmlFor="endDate">End Date</label>
      <input type="date" />
      <br />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={resume.education.description.join("\n")}
        onChange={handleDescriptionChange}
      />
    </form>
  );
}


export default EducationSection;
