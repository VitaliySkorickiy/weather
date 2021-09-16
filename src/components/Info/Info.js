import React from 'react';
import './Info.css';

const Info = ({ weather, far }) => {

  const img = `https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`;
  const temp = Math.round(weather.main.temp);
  const description = weather.weather[0].description;

  return (
    <div className="info">
      <div className="info-wrapper">
        <img src={img} alt="sun" />

        <span>
          {far ?
            Math.round((temp * 1.8 + 32)) :
            temp}
          &deg;
        </span>
      </div>
      <div className="info-description">
        {description}
      </div>
    </div>
  );
}
export default Info;




