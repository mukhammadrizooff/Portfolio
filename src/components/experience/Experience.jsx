/* eslint linebreak-style:["error","windows"] */
import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => (
  <section id="experience">
    <h5 className="hx-padding">What skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>BOOTSTRAP</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>REACT</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>REDUX</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>Ruby on rails</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>Node js</h4>
              <small className="text-light">Beginner</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>Postgresql</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>Mysql</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
