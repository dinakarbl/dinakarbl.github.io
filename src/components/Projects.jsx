import React from 'react'
import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <p className="section-label reveal">// Projects</p>
        <h2 className="section-title reveal">Things I've built</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.num} className="project-card reveal">
              <div className="project-card__num">{p.num}</div>
              <div className="project-card__title">{p.title}</div>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__stack">
                {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
              <div className="project-card__links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    GitHub →
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="project-link project-link--demo">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
