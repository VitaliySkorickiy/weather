import React, { useState } from 'react';
import Search from '../Search/Search';
import Form from '../Form/Form';
import './Header.css';

const Header = ({ newCity, setNewCity, error, far, setFar, cityName }) => {

  const [searchPanel, setSearchPanel] = useState(true)

  let hidden = '';

  if (window.innerWidth < 830) {
    hidden = searchPanel ? '' : 'hidden';
  }

  const celActiveDegree = far ? '' : 'active-degree-cel';
  const farActiveDegree = far ? 'active-degree-far' : '';

  return (

    <div className="header">
      <div className="header-city">
        {searchPanel
          ?
          <Search
            cityName={cityName}
            setSearchPanel={setSearchPanel}
            searchPanel={searchPanel}
          />
          :
          <Form
            setNewCity={setNewCity}
            newCity={newCity}
            setSearchPanel={setSearchPanel}
            searchPanel={searchPanel}
            error={error}
          />
        }
      </div>

      <div className={`header-degree ${hidden}`}>
        <span>&deg;</span>
        <button
          className={`cel ${celActiveDegree}`}
          onClick={() => setFar(false)}
        >
          C
        </button>
        <button
          className={`far ${farActiveDegree}`}
          onClick={() => setFar(true)}
        >
          F
        </button>
      </div>
    </div>
  );
}

export default Header;