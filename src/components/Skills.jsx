import React from 'react'
import { skills } from '../data/content'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <p className="section-label reveal">// Skills</p>
        <h2 className="section-title reveal">What I work with</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group} className="skill-group reveal">
              <div className="skill-group__title">{s.group}</div>
              <div className="skill-tags">
                {s.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
