import type { Resume } from "../../types/resume";

function Experience({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume({
      ...resume,
      experience: {
        ...resume.experience,
        title: e.target.value,
        company: e.target.value,
        location: e.target.value,
        startDate: new Date(),
        endDate: new Date(),
        description: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
        ],
      },
    });
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setResume({
        ...resume,
        experience: {
            ...resume.experience,
            description: [
              ...e.target.value.split("\n"),
            ],
        }
    })
  }
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="">Título</label>
      <input
        type="text"
        placeholder="Título da experiência"
        name="title"
        value={resume.experience.title}
        onChange={handleTitleChange}
      />
      <label htmlFor="">Empresa</label>
      <input
        type="text"
        placeholder="Nome da empresa"
        name="company"
        value={resume.experience.company}
        onChange={handleTitleChange}
      />
      <label htmlFor="">Localização</label>
      <input
        type="text"
        placeholder="Localização"
        name="location"
        value={resume.experience.location}
        onChange={handleTitleChange}
      />
      <label htmlFor="">Data de início</label>
      <input type="date" placeholder="Data de início" name="startDate" />{" "}
      <label htmlFor="">Data de término</label>
      <input type="date" placeholder="Data de término" name="endDate" />
      <label htmlFor="">Descrição</label>
      <textarea
        placeholder="Descreva a experiência"
        className="flex p-4 rounded-lg border border-gray-300 w-full h-1.5xl"
        name="description"
        value={resume.experience.description}
        onChange={handleDescriptionChange}
      />
    </form>
  );
}

export default Experience;
