import React from 'react';
import style from './styleRegForm';
import './RegForm.css';

function RegForm() {
  return (
    <div style={style.regForm}>
      <div className="title" style={style.regFormTitle}>
        Registration
        <div className="subtitle" style={style.regFormSubTitle}>
          Who are you?
        </div>
      </div>

      <div className="checkboxs">
        <div className="round round-checkboxClient">
          <input type="checkbox" id="checkboxClient" />
          <label htmlFor="checkboxClient">
            <b style={{ marginLeft: '35px' }}>client</b>
          </label>
        </div>

        <div className="round round-checkboxCourier">
          <input type="checkbox" id="checkboxCourier" />
          <label htmlFor="checkboxCourier">
            <b style={{ marginLeft: '35px' }}>courier</b>
          </label>
        </div>
      </div>

      <div>
        <input className="input" type="text" placeholder="Name" style={style.inputBox} />
        <input className="input" type="text" placeholder="Email" style={style.inputBox} />
        <input className="input" type="text" placeholder="Phone" style={style.inputBox} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <input
          className="button is-rounded is-large register-button"
          type="submit"
          value="Click to register"
        />
      </div>
    </div>
  );
}

export default RegForm;
