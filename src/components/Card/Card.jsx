import React from 'react';

export default function Card({name, max, min, img, onClose, id}) {
  // acá va tu código
  
  return <div>
      <button onClick={() => onClose(id)}>X</button>
      <h1>Nombre: {name}</h1>
      <h3>Max: {max}</h3>
      <h3>Min: {min}</h3>
      <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt={name} />
    </div>
};