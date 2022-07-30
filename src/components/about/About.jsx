/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';
import './about.css';
import ME from '../../assets/user.jpg';

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
            <small>1+ years working</small>
          </article>

          <article className="about__card">
            <FaUsers className="about__icon" />
            <h5>Contributions</h5>
            <small>40+ Worldwide</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>40+ Completed projects</small>
          </article>
        </div>

        <p>
            Hello everyone, my name is Muhammad Rizo, I have a goal
            contribute to a large-scale project
            used globally one day.

            I want to work for your company because
            good mission and good of the company
            improves my work environment
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