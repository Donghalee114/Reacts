import "./ProjectCard.css"


function ProjectCard({ title, desc, link }) {
  return (
    <div className="ProjectCard">
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} target="_blank" rel="noreferrer" style={{
        marginTop: "10px",
        display: "inline-block",
        color: "blue",
        textDecoration: "underline"
      }}>
        🔗 바로가기
      </a>
    </div>

  );
}

export default ProjectCard;
