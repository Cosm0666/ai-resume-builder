function ResumePreview({ resume }: any) {
  return (
    <div>
      <h1>{resume.personal.fullName || "Your Name"} </h1>
    </div>
  );
}

export default ResumePreview;
