import SectionHeading from '../components/common/SectionHeading.jsx';
import projects from '../data/projects.js';
import { useLocale } from '../context/LocaleContext.jsx';

const Projects = () => {
  const { locale } = useLocale();
  const data = projects[locale];

  return (
    <section id="projects" className="section section--projects">
      <div className="shell section__inner">
        <SectionHeading {...data.heading} />

        <div className="projects-grid">
          {data.items.map((project) => (
            <article key={project.id} className="project-card">
              <span className="project-card__type">{project.type}</span>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__summary">{project.summary}</p>
              <div className="project-card__stack">
                {project.stack.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              {project.links?.length ? (
                <div className="project-card__links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      className="project-card__link"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
