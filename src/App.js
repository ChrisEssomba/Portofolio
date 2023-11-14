/* eslint-disable react/prop-types */

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Competences } from './components/Competences';
import { Projects } from './components/Projets';
import PropTypes from 'prop-types';

//<h1 className="headerContainer">Portofolio</h1>
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Competences />
      <Projects />
      
 
    </div>
  );
}

export default App;