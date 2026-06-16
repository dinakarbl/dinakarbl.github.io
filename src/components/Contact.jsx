import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-inner contact-inner">
        <p className="section-label reveal">// Contact</p>
        <h2 className="section-title reveal">Let's connect</h2>
        <p className="contact-sub reveal">
          Open to full-time roles, internships, collaborations, and interesting problems.
          Best reached via email or LinkedIn.
        </p>
        <div className="contact-links reveal">
          <a href="mailto:dinakarbl444@gmail.com" className="btn btn-primary">dinakarbl444@gmail.com</a>
          <a href="https://linkedin.com/in/dinakar-b-l" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href="https://github.com/dinakarbl" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>
    </section>
  )
}
