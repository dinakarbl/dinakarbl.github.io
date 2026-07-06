import React from 'react'
import { education } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <p className="section-label reveal">// About</p>
        <h2 className="section-title reveal">A bit about me</h2>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I got into data science because I loved being able to take a messy,
              sprawling dataset and actually tell a story from it, something that made
              sense to engineers and non-technical folks alike. Then AI came along and
              it just clicked. As a CS grad who's always loved making computers do the
              heavy lifting, watching AI handle the mundane and repetitive stuff while
              we focus on the interesting problems felt like the natural next step.
            </p>
            <p>
              I'm most at home with real-world, applied problems. The kind where I can
              actually build something with my skills to solve it. I like when the
              problem is messy and the right approach isn't obvious from the start.
            </p>
            <p>
              Outside of work, you'll find me hanging out with friends, gaming, and on
              the pitch; I'm a big soccer fan and play whenever I get the chance.
            </p>
          </div>

          <div className="about-edu reveal">
            <p className="about-edu__label">Education</p>
            {education.map((e) => (
              <div key={e.school} className="edu-item">
                <div className="edu-school">{e.school}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-meta">
                  <span>{e.period}</span>
                  <span className="edu-gpa">GPA: {e.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
