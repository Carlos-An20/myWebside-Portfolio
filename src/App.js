import React from 'react';
import './App.css';
import Home from './componentes/Hero/Home';
import Header from './componentes/header/header';
import Features from './componentes/features/Features';
import Porfolio from './componentes/Porfolio/Porfolio';
import Contact from './componentes/Contact/Contact';
import Footer from './componentes/Footer/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Features/>
    <Porfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
