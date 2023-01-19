import axios from 'axios';
import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';


function App() {
  const onSearch = (ciudad) => {
  axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then ((response) => {setCities((oldCities) => [...oldCities, response.data]);})
    .catch ((err) => {
      alert('Ciudad no Disponible');
    })
};

  const onClose = (id) => {
    setCities ((oldCities) => oldCities.filter((city) => city.id !== id));
  };


  const [cities, setCities] = useState ([]);

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Nav onSearch = {onSearch}/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
      
      <hr />
      <div>
        <Cards cities = {cities} onClose = {onClose}/>
      </div>
      <hr />
    </div>
  );
}

export default App;
