import React from 'react';
import AnalyticsEventTracker from '../eventsTracker/AnalyticsEventTracker';
import './portfolio.css';
import ProjectImage1 from '../../assets/bookstore.png';
import ProjectImage2 from '../../assets/leaderboard.png';
import ProjectImage3 from '../../assets/mathma.png';
import ProjectImage4 from '../../assets/paymodus.png';
import ProjectImage5 from '../../assets/hollyflx.png';
import ProjectImage6 from '../../assets/space.png';

const projectData = [
  {
    id: 1,
    image: ProjectImage1,
    title: 'Yaqeen Group',
    description: 'An Api based application which adds, I founded this project under the auspices of Orient Gold INC and it is the concept of an online real estate trading platform.',
    github: 'https://github.com/mukhammadrizooff/yaqeen',
    demo: 'https://yaqeen.uz/',
  },

  {
    id: 2,
    image: ProjectImage2,
    title: 'Baraket travel',
    description: 'This project was built by a travel agency to Mecca and Medina at their own discretion and on my advice.',
    github: 'https://github.com/rahmiddinasiydinov/Baraket-Travel',
    demo: 'https://baraket-travel.uz/uz/',
  },

  {
    id: 3,
    image: ProjectImage3,
    title: 'Humo E-market',
    description: 'I built Humo e-commerce as a practice based on the accumulated knowledge and potential.',
    github: 'https://github.com/mukhammadrizooff/E-Commerce-React',
    demo: 'https://dev--mukhammadrizooff-humo-shop.netlify.app',
  },

  {
    id: 4,
    image: ProjectImage4,
    title: 'Pay Modus',
    description: 'The Pay Modus App is going to be helpful to track your expenses and transactions.',
    github: 'https://github.com/mukhammadrizooff/Budget-app',
    demo: 'https://pay-modus-mukhammadrizooff.herokuapp.com/',
  },

  {
    id: 5,
    image: ProjectImage5,
    title: 'Hollyflix',
    github: 'https://github.com/mukhammadrizooff/Hollyflix-Capstone',
    description: 'In this project, you can view the details of the movies and write your opinion in the comments and also set the time. In this project, we did three people together based on a kanban board plan.',
    demo: 'https://sumairq.github.io/hollyflix-capstone/dist/',
  },

  {
    id: 6,
    image: ProjectImage6,
    title: 'Space Traveler`s Hub',
    github: 'https://github.com/mukhammadrizooff/Space-Travel-React',
    description: 'Web application that allows users to book rockets, dragons, and join selected space missions using data from the SpaceX API, we made a number of features with the help of cooperation with few contributors',
    demo: 'https://sumairq.github.io/',
  },
];

function Portfolio() {
  const gaEventTracker = AnalyticsEventTracker('Visit Projects');
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectData.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.image} alt="project thumbnail" />
            </div>
            <h3>{project.title}</h3>
            <small>{project.description}</small>
            <div className="cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTracker('View Source Code')}
              >
                Source Code
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTracker('View Live Demo')}
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
