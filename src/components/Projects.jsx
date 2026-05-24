import { portfolioData } from "../data/portfolioData";
import { IconArrowUpRight } from "./Icons";

const ProjectCard = ({ project, index }) => {
  const hasDemo = project.demo && project.demo !== "#";

  const handleClick = () => {
    if (hasDemo) window.open(project.demo, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e) => {
    if (hasDemo && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className={`group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-elevated)] ${
        hasDemo ? "cursor-pointer" : ""
      }`}
      onClick={hasDemo ? handleClick : undefined}
      onKeyDown={hasDemo ? handleKeyDown : undefined}
      role={hasDemo ? "link" : undefined}
      tabIndex={hasDemo ? 0 : undefined}
    >
      <div className="overflow-hidden rounded-[calc(1rem-2px)] bg-[var(--color-bg)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 py-4 md:px-5 md:py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-xs font-medium tabular-nums text-[var(--color-muted)]">
              {String(index + 1).padStart(2, "0")} · {project.year}
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)]">
              {project.title}
            </h3>
          </div>
          {hasDemo && (
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-all group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent-muted)] group-hover:text-[var(--color-accent)]">
              <IconArrowUpRight />
            </span>
          )}
        </div>

        <p className="body-text text-[0.9375rem]">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const featured = portfolioData.projects.filter((p) => p.featured);

  return (
    <section id="projects" className="fade-in-reveal scroll-mt-16 pb-[var(--spacing-section)]">
      <header className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label mb-2">Selected work</p>
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="body-text max-w-xs text-sm sm:text-right">
          Project belajar & eksperimen — setiap satu adalah catatan pertumbuhan.
        </p>
      </header>

      <div className="flex flex-col gap-5">
        {featured.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
