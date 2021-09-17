import React, { useContext } from 'react';
import Context from '../../Context';

import './Optionally.css';

const Optionally = () => {

  const { weather } = useContext(Context);

  const windSpeed = Math.round(weather.wind.speed);
  const pressure = weather.main.pressure;
  const humidity = weather.main.humidity;
  const deg = weather.wind.deg;
  // const rain = weather.pop;

  let direction = '';

  if (315 <= deg || deg < 45) {
    direction = 'северный'
  } else if (45 <= deg || deg < 135) {
    direction = 'восточный'
  } else if (135 <= deg || deg < 225) {
    direction = 'южный'
  } else if (225 <= deg || deg < 315) {
    direction = 'западный'
  }

  return (
    <div className="optionally">

      <div className="wind optionally-item">
        <span className="optionally-name">Ветер</span>
        <p className="optionally-data">
          {windSpeed} м/с, {direction}
        </p>
      </div>

      <div className="pressure optionally-item">
        <span className="optionally-name">Давление</span>
        <p className="optionally-data">
          {Math.round(pressure * 0.750063755419211)} мм рт. ст.
        </p>
      </div>

      <div className="humidity optionally-item">
        <span className="optionally-name">Влажность</span>
        <p className="optionally-data">{humidity}%</p>
      </div>

      <div className="rain optionally-item">
        <span className="optionally-name">Вероятность дождя</span>
        <p className="optionally-data">10%</p>
      </div>

    </div>
  );
}

export default Optionally;




