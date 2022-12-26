import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  //console.log(props);
  const {cities} = props;
  //console.log(cities);
  return <div>
    {cities.map( c => 
      <Card
        key = {c.id}
        onClose = {() => alert(c.name)}
        name = {c.name}
        min = {c.main.temp_min}
        max = {c.main.temp_max}
        img = {c.weather[0].icon}
      />)}
  </div>
};