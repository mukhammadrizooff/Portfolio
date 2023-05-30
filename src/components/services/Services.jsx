import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I create High-fidelity prototypes</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>I create mobile and web user interface designs</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>I create digital product marketing designs</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I design and build algorithms and flowcharts to create new
                software programs and systems.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I identify user requirements and specifications and produce
                efficient and elegant code based on requirements.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can test and deploy programs and applications. I troubleshoot,
                debug, maintain and improve existing software.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I study user feedbacks and come up with the necessary
                improvements on particular sotware product. It can be adding a
                new feature or resolving the bugs existing there.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can create a pitch deck for a particular product which is
                going to be launched or presented.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can create digital marketing posts, stories and flyers which
                grab people&lsquo; s attention.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can create content for a specific online audience.
              </p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
      </div>
    </section>
  );
}

export default Services;
