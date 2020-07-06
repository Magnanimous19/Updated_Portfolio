import React from 'react';
import './App.css';
import{BrowserRouter as Router,Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';
import Project from './contents/Project';
import Contact from './contents/Contact';

  function App() {
    return (

      <Router>
        <div className="App">
          <Navbar />

          {/* Route for Home.js Contents */}
          <Route exact path="/">
            <Home />
          </Route>

          {/*Route for About.js contents */}
          <Route path="/about">
            <About />
          </Route>

          {/*Route for Skills.js contents */}
          <Route path="/skills">
            <Skills />
          </Route>

          {/*Route for Projects.js contents */}
          <Route path="/project">
            <Project />
          </Route>

          {/*Route for Contact.js contents */}
          <Route path="/contact">
            <Contact />
          </Route>

        </div>
      </Router>

    );
  }

export default App;