import React, { useContext } from 'react';
import Context from '../../Context';

import './Optionally.css';

const Optionally = () => {

  const { response } = useContext(Context);
  const windSpeed = Math.round(response.list.[0].wind.speed);
  const pressure = response.list.[0].main.pressure;
  const humidity = response.list.[0].main.humidity;
  const deg = response.list.[0].wind.deg;
  const rain = response.list.[0].pop;

  let direction = '';

  if (315 <= deg || deg < 45) {
    direction = 'южный  '
  } else if (45 <= deg || deg < 135) {
    direction = 'западный  '
  } else if (135 <= deg || deg < 225) {
    direction = 'северный'
  } else if (225 <= deg || deg < 315) {
    direction = 'восточный'
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
        <p className="optionally-data">{rain * 100}%</p>
      </div>

    </div>
  );
}

export default Optionally;




