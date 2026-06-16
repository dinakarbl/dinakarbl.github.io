import React, { useState } from 'react'
import { certifications } from '../data/content'
import CertModal from './CertModal'
import './Certifications.css'

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section id="certifications" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <p className="section-label reveal">// Certifications</p>
        <h2 className="section-title reveal">Certificates</h2>
        <div className="certs-grid">
          {certifications.map((c) => (
            <button
              key={c.id}
              className="cert-card reveal"
              onClick={() => setActiveCert(c)}
              aria-label={`View ${c.title} certificate`}
            >
              <div className="cert-card__preview">
                <img src={c.image} alt={c.title} className="cert-card__img" />
                <div className="cert-card__overlay">
                  <span>View Certificate ↗</span>
                </div>
              </div>
              <div className="cert-card__body">
                <div className="cert-card__title">{c.title}</div>
                <div className="cert-card__meta">
                  <span className="cert-card__issuer">{c.issuer}</span>
                  {c.note && <span className="cert-card__note">{c.note}</span>}
                </div>
                <div className="cert-card__date">{c.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </section>
  )
}
