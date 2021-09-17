import React, { useContext } from 'react';
import Context from '../../Context';

import './Form.css';

const Form = ({ searchPanel, setSearchPanel }) => {

  const { error, newCity, setNewCity } = useContext(Context);

  return (
    <div className="form">
      <input
        className={`'search-input' ${error ? 'err' : ''}`}
        type="text"
        onInput={e => setNewCity(e.target.value)}
        value={newCity}
      />
      <button
        className="form-btn"
        onClick={() => setSearchPanel(!searchPanel)}
      >
        OK
      </button>
    </div >
  );
}

export default Form;




