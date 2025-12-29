import React from "react";
import "./about.scss";
import { about } from "../../data/about";
import AnimateSection from "../AnimateSection";

export default function About() {
  const {
    name,
    title,
    location,
    availability,
    headline,
    bio = [],
    photo,
    expertise = [],
    stack = [],
    metrics = [],
    experience = [],
    education = [],
    certifications = [],
    links = {},
  } = about || {};

  return (
    <AnimateSection as="section" id="about" className="about-section">
      <div className="row align-items-start">
        <div className="about-content text-start">
          <div className="about-columns">
            <div className="about-col about-col-left">
              <h2 className="about-title">
                <span className="about-name">{name}</span>
                {title ? <span className="about-role"> — {title}</span> : null}
              </h2>

              {Boolean(headline) && (
                <p className="about-headline">{headline}</p>
              )}

              <ul className="about-meta">
                {location ? (
                  <li>
                    <strong>Location:</strong> {location}
                  </li>
                ) : null}
              </ul>

              {bio?.length ? (
                <div className="about-bio">
                  {bio.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              ) : null}

              {expertise?.length ? (
                <div className="about-expertise">
                  <h3>Expertise</h3>
                  <div className="chip-list">
                    {expertise.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {stack?.length ? (
                <div className="about-stack">
                  <h3>Tech Stack</h3>
                  <div className="chip-list">
                    {stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="about-col about-col-right">
              {experience?.length ? (
                <div className="about-experience">
                  <h3>Experience</h3>
                  <ul className="experience-list">
                    {experience.map((exp, idx) => (
                      <li
                        key={`${exp.company}-${idx}`}
                        className="experience-item">
                        <div className="experience-header">
                          <span className="experience-role">{exp.role}</span>
                          {exp.company ? (
                            <span className="experience-company">
                              {" "}
                              @ {exp.company}
                            </span>
                          ) : null}
                          {exp.period ? (
                            <span className="experience-period">
                              {" "}
                              — {exp.period}
                            </span>
                          ) : null}
                        </div>
                        {exp.summary ? (
                          <p className="experience-summary">{exp.summary}</p>
                        ) : null}
                        {exp.highlights?.length ? (
                          <ul className="experience-highlights">
                            {exp.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {education?.length ? (
                <div className="about-education">
                  <h3>Education</h3>
                  <ul className="education-list">
                    {education.map((edu, idx) => (
                      <li key={idx} className="education-item">
                        <div className="education-header">
                          <span className="education-program">
                            {edu.program}
                          </span>
                          {edu.school ? (
                            <span className="education-school">
                              {" "}
                              @ {edu.school}
                            </span>
                          ) : null}
                          {edu.year ? (
                            <span className="education-year">
                              {" "}
                              — {edu.year}
                            </span>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {certifications?.length ? (
                <div className="about-certifications">
                  <h3>Certifications</h3>
                  <ul className="certifications-list">
                    {certifications.map((c, idx) => (
                      <li key={idx} className="certification-item">
                        <span className="certification-name">{c.name}</span>
                        {c.year ? (
                          <span className="certification-year">
                            {" "}
                            — {c.year}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {links && (
                <div className="about-links">
                  <h3>Links</h3>
                  <div className="link-list">
                    {links.resume ? (
                      <a
                        href={links.resume}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noreferrer">
                        Resume
                      </a>
                    ) : null}
                    {links.github ? (
                      <a
                        href={links.github}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noreferrer">
                        GitHub
                      </a>
                    ) : null}
                    {links.linkedin ? (
                      <a
                        href={links.linkedin}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noreferrer">
                        LinkedIn
                      </a>
                    ) : null}
                    {links.website ? (
                      <a
                        href={links.website}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noreferrer">
                        Website
                      </a>
                    ) : null}
                    {links.email ? (
                      <a
                        href={`mailto:${links.email}`}
                        className="btn btn-outline">
                        Email
                      </a>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimateSection>
  );
}
