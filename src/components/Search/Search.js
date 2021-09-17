import React, { useContext } from 'react';
import Path from '../../img/Path.png';
import Context from '../../Context';

import './Search.css';

const Search = ({ setSearchPanel, searchPanel }) => {

  const { weather } = useContext(Context);

  return (
    <div className="search">
      <div className="city">{weather.name}</div>
      <div className="city-btn">
        <button
          className="change-city"
          onClick={() => setSearchPanel(!searchPanel)}
        >
          Сменить город
        </button>

        <div>
          <img src={Path} alt="указатель" />
          Мое местоположение
        </div>
      </div>
    </div>
  );
}

export default Search;




