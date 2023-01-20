import axios from 'axios';
import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes, } from 'react-router-dom';
import About from './components/About/About';
import Ciudad from './components/Ciudad/Ciudad';


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
  const onFilter = (ciudadId) => {
    let city = cities.filter ( c => c.id === parseInt(ciudadId));
    if (city.length > 0){
      return city[0];
    }
    else {
      return null;
    }
  }
  const [cities, setCities] = useState ([]);
  
  
  return (
    <div className="App">
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <Routes>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="/" element = {<Cards cities={cities} onClose = {onClose}/>}/>
        <Route exact path="/ciudad/:ciudadId" element = {<Ciudad onFilter={onFilter}/>}/>
      </Routes>
    </div>
  );
}

export default App;
