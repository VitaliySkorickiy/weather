import React from 'react';
import Path from '../../img/Path.png';

import './Search.css';

const Search = ({ cityName, setSearchPanel, searchPanel }) => {
  return (
    <div className="search">
      <div className="city">{cityName}</div>
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




