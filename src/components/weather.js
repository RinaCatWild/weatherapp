import React from "react";

const Weather = props =>
(
        <div className="infoWeath">
      {props.city &&
      <div><p>City & Country: {props.city}, {props.country}</p>
        <p>Temperature: {props.temp} °C</p>
        <p>Air Pressure: {props.pressure} hpa</p>
        <p>Sunset: {props.sunset}</p>
      </div>}
      <p className="error">{props.error}</p>
      </div>
);


export default Weather;
