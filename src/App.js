import React, { useState } from 'react';
import { useFetch } from './GetData/useFetch';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Optionally from './components/Optionally/Optionally';
import Context from './Context'

import './App.css';

function App() {
  const getData = useFetch();
  const weather = getData.response;
  const error = getData.error;
  const newCity = getData.newCity;
  const setNewCity = getData.setNewCity;

  const [far, setFar] = useState(false);

  const value = {
    weather,
    error,
    newCity,
    far,
    setNewCity,
    setFar
  }

  return (
    <Context.Provider value={value}>
      <div className="container">
        {weather ?
          <>
            <Header />
            <Info />
            <Optionally />
          </> : error ?
            <h1>{error}</h1> :
            <h2>Loading...</h2>
        }
      </div>
    </Context.Provider>
  );
}
export default App;
