import React, { useState } from 'react';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Optionally from './components/Optionally/Optionally';

import { useFetch } from './GetData/useFetch';


import './App.css';

function App() {

  const getData = useFetch();
  const weather = getData.response;
  const error = getData.error;
  const newCity = getData.newCity;
  const setNewCity = getData.setNewCity;

  const [far, setFar] = useState(false);

  return (
    <div className="container">
      {weather ?
        <>
          <Header
            newCity={newCity}
            setNewCity={setNewCity}
            cityName={weather.name}
            setFar={setFar}
            far={far}
            error={error}
          />
          <Info
            weather={{ ...weather }}
            far={far}
          />
          <Optionally weather={{ ...weather }} />
        </> : error ?
          <h1>{error}</h1> :
          <h2>Loading...</h2>
      }
    </div>
  );
}
export default App;
