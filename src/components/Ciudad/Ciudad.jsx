import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Ciudad ({onFilter}) {
    //console.log(city);
    const {ciudadId} = useParams();
    const city = onFilter(ciudadId)
    const navigate = useNavigate();
    const back = () => {navigate(-1)}
    console.log(city);
    return <div>
        <button onClick={back}>Volver</button>
        <h1>{city.name}</h1>
        <h2>País: {city.sys.country}</h2>
        <h2>{city.weather[0].description}</h2>
        <h3>Temp: {city.main.temp}°C</h3>
        <h3>Max: {city.main.temp_max}°C</h3>
        <h3>Min: {city.main.temp_min}°C</h3>
        <h3>Humedad: {city.main.humidity}</h3>
        <h3>Nubosidad: {city.clouds.all}</h3>
        <h3>Viento: {city.wind.speed} km/h</h3>
        <h3>Sensación Térmica: {city.main.feels_like}°C</h3>
    </div>
}