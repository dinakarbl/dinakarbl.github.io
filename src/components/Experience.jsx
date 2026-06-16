import React from 'react'
import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <p className="section-label reveal">// Experience</p>
        <h2 className="section-title reveal">Where I've worked</h2>
        <div className="exp-list">
          {experience.map((e) => (
            <div key={e.company + e.date} className="exp-item reveal">
              <div className="exp-item__date">{e.date}</div>
              <div className="exp-item__body">
                <div className="exp-item__company">{e.company}</div>
                <div className="exp-item__role">{e.role} · {e.location}</div>
                <ul className="exp-item__bullets">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
