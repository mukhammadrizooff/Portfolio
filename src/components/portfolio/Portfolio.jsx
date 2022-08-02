/* eslint linebreak-style:["error","windows"] */
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
    title: 'Bookstore CMS',
    description: 'It is an app that allows you to display a list of added books, add new book and remove a book',
    github: 'https://github.com/mukhammadrizooff/Bookstore',
    demo: 'https://mukhammadrizooff.github.io/Bookstore/',
  },

  {
    id: 2,
    image: ProjectImage2,
    title: 'Leaderboard',
    description: 'An Api based application which adds and retrieves the scores from the leaderboard API',
    github: 'https://github.com/mukhammadrizooff/Leaderboard',
    demo: 'https://mukhammadrizooff.github.io/Leaderboard/dist/',
  },

  {
    id: 3,
    image: ProjectImage3,
    title: 'Math Magicians',
    description: 'This project is a simple calculator web application, using JavaScript and React. It consists of three pages, homepage, calculator and quote.',
    github: 'https://github.com/mukhammadrizooff/Math-Magicians',
    demo: 'https://mukhammadrizooff.github.io/Math-Magicians/',
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
    description: 'Web application that allows users to book rockets, dragons, and join selected space missions using data from the SpaceX API.',
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
