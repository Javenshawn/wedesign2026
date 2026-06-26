import { Clock, MessageSquare, Upload, Download } from "lucide-react";
import type { Project } from "@/lib/types";

const statusClass = {
  "in progress": "status-blue",
  review: "status-yellow",
  completed: "status-green",
  revision: "status-orange"
};

type ProjectCardProps = {
  project: Project;
  detailed?: boolean;
};

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  const completed = project.status === "completed";
  const review = project.status === "review";

  return (
    <article className={detailed ? "project-card detailed-project" : "project-card"}>
      <div className="project-card-top">
        <div>
          <h3>{project.id}</h3>
          <p>{project.client}</p>
        </div>
        <span className={`status-pill ${statusClass[project.status]}`}>{project.status}</span>
      </div>
      <h2>{project.title}</h2>
      {detailed ? (
        <>
          <strong className="project-label">Design Style</strong>
          <span className="project-style">{project.style}</span>
          <p className="project-description">{project.description}</p>
        </>
      ) : (
        <span className="category-pill">{project.category}</span>
      )}
      <div className="progress-row">
        <span>Progress</span>
        <strong>{project.progress}%</strong>
      </div>
      <div className="progress-track" aria-label={`${project.progress}% complete`}>
        <span style={{ width: `${project.progress}%` }} />
      </div>
      <div className="project-meta">
        <span>
          <Clock size={14} /> {project.eta}
        </span>
        {!detailed ? <span>Designer: {project.designer}</span> : null}
        {detailed ? <span>Last updated: {project.updated}</span> : null}
      </div>
      <button className={review || completed ? "button button-primary" : "button button-ghost"} type="button">
        {completed ? <Download size={15} /> : review ? <Download size={15} /> : <Upload size={15} />}
        {completed ? "Download Files" : review ? "Review & Download" : detailed ? "Upload Progress" : "Message"}
        {!detailed && !completed && !review ? <MessageSquare size={14} /> : null}
      </button>
      {detailed && !completed ? <small>Our designers are working on your project</small> : null}
    </article>
  );
}
