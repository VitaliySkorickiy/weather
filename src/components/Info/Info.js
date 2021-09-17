import React, { useContext } from 'react';
import Context from '../../Context';
import './Info.css';

const Info = () => {

  const { response, far } = useContext(Context);
  const weatherList = response.list.[0];
  const img = `https://openweathermap.org/img/wn/${weatherList.weather[0]['icon']}@2x.png`;
  const temp = Math.round(weatherList.main.temp);
  const description = weatherList.weather[0].description;

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




