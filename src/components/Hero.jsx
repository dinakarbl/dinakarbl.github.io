import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Data Science & Engineering</p>
        <h1 className="hero-name">
          <span className="hero-name__first">Dinakar</span>
          <span className="hero-name__rest">Balehonniga Lingaraju</span>
        </h1>
        <p className="hero-sub">
          M.S. Data Science, Arizona State University. I build AI systems, analytics pipelines, and data-driven software that solve real problems.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View Projects ↓</a>
          <a href="#experience" className="btn btn-outline">View Experience</a>
          <a href="#contact" className="btn btn-outline">Let's Connect</a>
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore</div>
    </section>
  )
}
