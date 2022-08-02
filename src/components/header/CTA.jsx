/* eslint linebreak-style:["error","windows"] */
import React from 'react';
import CV from '../../assets/CV.pdf';

const CTA = () => (
  <div className="cta">
    <a href={CV} className="btn" download>Download CV</a>
    <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
  </div>
);

export default CTA;
