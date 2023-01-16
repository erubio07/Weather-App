import React, { useState } from 'react';


export default function SearchBar({onSearch}) {
  // acá va tu código
  //console.log(props);
  //const {onSearch} = props;
  const [searchInputs, setSearchInputs] = useState('');
  const searchInputsHandler = (e) => {
    setSearchInputs (e.target.value)
  };

  return <div>
    <input type="text" name="search" id="search" onChange={searchInputsHandler} placeholder='Buscar Ciudad...' />
    <button onClick={() => onSearch (searchInputs)}>Agregar</button>
  </div>
};