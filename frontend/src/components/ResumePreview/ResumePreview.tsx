import Header from "./Header";

function ResumePreview({ resume }: any) {
  return (
    <div className="w-1/2">
      <Header/>
      <h1>{resume.personal.fullName || "Seu Nome"} </h1>
    </div>
  );
}

export default ResumePreview;
