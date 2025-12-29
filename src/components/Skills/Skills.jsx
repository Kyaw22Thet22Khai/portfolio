import React from "react";

//SCSS for styles
import "./skill.scss";

//Components
import AnimateSection from "../AnimateSection";
//Data
import { skillsByCategory } from "../../data/skills";

export default function Skills() {
  return (
    <AnimateSection as="section" id="skills" className="skills-section">
      <header className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">Tools and technologies I use</p>
      </header>

      <div className="skills-grid">
        {skillsByCategory.map((cat) => (
          <section key={cat.title} className="skill-group">
            <h3 className="skill-group-title">{cat.title}</h3>
            <ul className="skill-list">
              {cat.items.map((s) => (
                <li key={s.id} className="skill-item">
                  <span
                    className="skill-badge"
                    title={`${s.levelLabel} • ${s.years}y`}>
                    <span className="skill-icon" aria-hidden>
                      {s.icon || ""}
                    </span>
                    <span className="skill-name">{s.name}</span>
                  </span>
                  <span className="skill-meta">
                    <span
                      className="skill-level"
                      aria-label={`Level ${s.level}`}>
                      {s.levelLabel}
                    </span>
                    <span className="skill-years">{s.years}y</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </AnimateSection>
  );
}
