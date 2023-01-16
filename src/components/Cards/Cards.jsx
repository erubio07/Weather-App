import React from 'react';
import Card from '../Card/Card';


export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  //console.log(props);
  
  //console.log(cities);
  return <div>
    {cities.map((c) => 
      <Card
        id = {c.id}
        key = {c.id}
        onClose = {onClose}
        name = {c.name}
        min = {c.main.temp_min}
        max = {c.main.temp_max}
        img = {c.weather[0].icon}
      />)}
  </div>
};