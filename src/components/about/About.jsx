import React from 'react';
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';
import './about.css';
import ME from '../../assets/user.jpg';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="my profile" />
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
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>40+ Completed projects</small>
          </article>
        </div>

        <p>
          Hello everyone, my name is Samuel has a goal
          of contributing to a big scale project that
          is used globally one day

          I would like to work in your company because
          of the good mission of the company and good
          working environment which will enhance my
          productivity.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let&lsquo;s talk
        </a>
      </div>
    </div>
  </section>
);

export default About;