import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  company: string;
  date: string;
  status: string;
  href: string | null;
  image: string | null;
  description?: string;
};

export default function ProjectTile({ project }: { project: Project }) {
  let tag = null;

  if (project.status === "external") {
    tag = <span className="label-link">[try now ↗]</span>;
  }

  if (project.status === "internal") {
    tag = <span className="label-link">[show more]</span>;
  }

  if (project.status === "coming soon") {
    tag = <span>[coming soon]</span>;
  }

  const card = (
    <>
      <div className="tile">
        {project.image && (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 810px) 100vw, 50vw"
            loading="eager"
            className="tile-image"
          />
        )}
        <span className="project-title">{project.title}</span>
      </div>
      <p className="label">
        {project.company} [{project.date}] {tag}
      </p>
      {project.description && (
       <p className="label card-description">{project.description}</p>
      )}
    </>
  );

  if (project.status === "external" && project.href) {
    return (
      <a
        className="card"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {card}
      </a>
    );
  }

  if (project.status === "internal") {
    return (
      <Link className="card" href={`/projects/${project.slug}`}>
        {card}
      </Link>
    );
  }

  return <div className="card">{card}</div>;
}