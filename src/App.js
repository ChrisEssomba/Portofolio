import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Competences } from './components/Competences';

//<h1 className="headerContainer">Portofolio</h1>
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Competences />
      
 
    </div>
  );
}

export default App;