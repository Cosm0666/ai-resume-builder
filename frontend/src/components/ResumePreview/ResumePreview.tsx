import Header from "./Header";

function ResumePreview({ resume }: any) {
  return (
    <div className="w-1/2">
      <Header />
      <h1>Nome: {resume.personal.fullName} </h1>
      <h1>Email: {resume.personal.email} </h1>
      <h1>Telefone: {resume.personal.phone}</h1>
      <h1>Github: {resume.personal.github} </h1>
      <h1>Linkedin: {resume.personal.linkedin} </h1>
      <h1>Website: {resume.personal.website} </h1>
      <h1>Sobre mim: {resume.personal.summary} </h1>
    </div>
  );
}

export default ResumePreview;
