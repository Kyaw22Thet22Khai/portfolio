import React, { useMemo, useState } from "react";
import "./projects.scss";
import AnimateSection from "../AnimateSection";
import ProjectCard from "./ProjectCard";
import { project as projects } from "../../data/project";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const sorted = useMemo(() => {
    return projects.slice().sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }, []);

  const visible = expanded ? sorted : sorted.slice(0, 3);
  const hasMore = sorted.length > 3;

  return (
    <AnimateSection as="section" id="projects" className="projects-section">
      <div className="container">
        <header className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Selected work across dashboards, admin tools, and web apps.
          </p>
        </header>

        <div className="projects-grid">
          {visible.map((item) => (
            <ProjectCard key={item.id || item.title} item={item} />
          ))}
        </div>

        {hasMore && (
          <div className="projects-actions">
            <button
              className="btn btn--secondary"
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </AnimateSection>
  );
}
