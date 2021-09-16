import React from 'react';
import './Form.css';

const Form = ({ newCity, setNewCity, setSearchPanel, searchPanel, error }) => {

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




