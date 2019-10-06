import React from "react";
import Information from "./components/information";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "15b50de70f339c32ce68593327c0e00a";

class App extends React.Component {

   state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }
   
getWeather = async (e) => {
    try {
        e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

      let date = new Date(data.sys.sunset*1000);
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      let seconds = "0" + date.getSeconds();
      let sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      this.setState ({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunset_date,
      error: undefined
      });
        
    } catch (error) {
        this.setState ({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: "Enter Correct City"
          });
    }
}
  

// Первоначальный вариант обработки ошибок

/* getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

        if (data.cod !== 200) {
          this.setState ({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: "Enter Correct City"
          });
        } else if (city) {

      let date = new Date(data.sys.sunset*1000);
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      let seconds = "0" + date.getSeconds();
      let sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      this.setState ({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunset_date,
      error: undefined
    });
  }
} */

  render () {
    return (
      <div className="wrapper">
      <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 info"><Information /></div>
          <div className="col-sm-7 form"><Form getWeather={this.getWeather} />
          <Weather  {...this.state}/></div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default App;
