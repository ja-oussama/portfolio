import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Articles from './containers/Articles';
import Projects from './containers/Projects';
import About from './containers/About';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Hero/>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/about" component={About}/>

    </div>
    </Router>
    
  );
}

export default App;
