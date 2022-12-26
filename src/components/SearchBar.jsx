import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  //console.log(props);
  const {onSearch} = props;
  return <div>
    <input type="text" name="search" id="search" placeholder='Buscar Ciudad...' />
    <button onClick={onSearch}>Agregar</button>
  </div>
};