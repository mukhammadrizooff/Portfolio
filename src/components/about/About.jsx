/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';
import './about.css';
import ME from '../../assets/02bg.png';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Picture" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>

          <article className="about__card">
            <FaUsers className="about__icon" />
            <h5>Contributions</h5>
            <small>45+ Worldwide</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>36+ Completed projects</small>
          </article>
        </div>

        <p>
          Hello I am Muhammad Rizo and I experienced software engineer
          who constantly seeks out innovative solutions to everyday problems.
          In my eighteen months in this industry,
          I have honed my analytical thinking and collaboration skills,
          and I love working with a team.
          I&apos;ve also had the opportunity to serve as the software engineer
          lead for three projects with First Technology.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let&lsquo;s Talk
        </a>
      </div>
    </div>
  </section>
);

export default About;
