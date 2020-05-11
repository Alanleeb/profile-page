import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home-page/home-page.component';
import Projects from './pages/projects/projects-main.component';
import Resume from './pages/resume/resume.component';
import Contact from './pages/contact /contact.component';
import About from './pages/about/about.component';
import { Switch, Route } from 'react-router-dom';


const App = () => {
  
  return (
<div>
    <Navbar />
    <Switch>
      <Route exact path="/profile-page" component={HomePage} />
      <Route exact path="profile-page/projects" component={Projects} />
      <Route exact path="profile-page/resume" component={Resume} />
      <Route exact path="profile-page/contact" component={Contact} />
      <Route exact path="profile-page/about" component={About} />
    </Switch>
</div>   
  );
}

export default App;
