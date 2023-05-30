/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Recomendations from './components/recomendations/Recomendations';
import Conatct from './components/contact/Conatct';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Recomendations />
        <Conatct />
        <Footer />
    </>
  );
};

export default App;
