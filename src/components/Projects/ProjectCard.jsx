import React from "react";

export default function ProjectCard({ item }) {
  if (!item) return null;
  const {
    title,
    subtitle,
    description,
    highlights = [],
    tech = [],
    role,
    status,
    image,
    links = {},
    tags = [],
    confidential,
  } = item;

  const hasDemo = Boolean(links?.demo);
  const hasRepo = Boolean(links?.repo) && !confidential;

  return (
    <article className="project-card card" aria-labelledby={`${item.id}-title`}>
      {image?.src && (
        <div className="project-card__media">
          <img
            src={image.src}
            alt={image.alt || `${title} screenshot`}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        </div>
      )}

      <div className="project-card__body">
        <header className="project-card__header">
          <h3 id={`${item.id}-title`} className="project-card__title">
            {title}
          </h3>
          {subtitle && <p className="project-card__subtitle">{subtitle}</p>}
          <div className="project-card__badges">
            {status && <span className="badge badge--status">{status}</span>}
            {role && <span className="badge badge--role">{role}</span>}
          </div>
        </header>

        {description && <p className="project-card__desc">{description}</p>}

        {!!highlights.length && (
          <ul className="project-card__highlights">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {!!tech.length && (
          <div className="project-card__tech">
            {tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}

        {!!tags.length && (
          <div className="project-card__tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        {(hasDemo || hasRepo) && (
          <div className="project-card__ctas">
            {hasDemo && (
              <a
                className="btn btn--secondary"
                href={links.demo}
                target="_blank"
                rel="noreferrer noopener">
                Live Demo
              </a>
            )}
            {hasRepo && (
              <a
                className="btn btn--secondary"
                href={links.repo}
                target="_blank"
                rel="noreferrer noopener">
                View Code
              </a>
            )}
            {Boolean(links?.repo) && confidential && (
              <span className="note">Repo private/confidential</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
