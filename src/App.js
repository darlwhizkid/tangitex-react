import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="particles-js"></div>
        <Header />
        <Hero />
        <main>
          <Services />
          <Portfolio />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;