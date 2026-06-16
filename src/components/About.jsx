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
              I recently graduated with an <span>M.S. in Data Science from Arizona State University</span> and
              have 2 years of professional software engineering experience at <span>Amadeus Labs</span>, one of
              the world's largest travel tech companies.
            </p>
            <p>
              I'm drawn to the full arc of a data problem — from raw, messy data all the way to a model or
              system that actually does something useful. My work tends to live at the overlap of{' '}
              <span>machine learning, AI, and data science</span>, with enough software engineering to ship
              things properly.
            </p>
            <p>
              I like working on problems that are a little open-ended, where the right approach isn't
              obvious from the start.
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
