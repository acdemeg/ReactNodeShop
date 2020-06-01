import React, { useState } from 'react';
import InputIcon from './InputIcon';
import styles from '../../scenes/Registration/Registration.scss'

function InputField({ 
  inputColor, type, name, placeholder,
  minLength, iconLeft, iconRight, inputTitle 
}) {
  const [input, setInput] = useState({
    iconName: 'exclamation',
    colorName: 'grey',
    iconEmail: 'exclamation',
    colorEmail: 'grey',
    iconPassw: 'exclamation',
    colorPassw: 'grey',
    iconPhone: 'exclamation',
    colorPhone: 'grey',
    iconPasswRepeat: 'exclamation',
    colorPasswRepeat: 'grey',
  });

  const changeInput = e => {
    const isValid = e.currentTarget.validity.valid;
    const { value } = e.currentTarget;

    const changeState = (iconProp, colorProp) => {
      if (isValid) {
        return setInput({ ...input, [iconProp]: 'check', [colorProp]: 'green' });
      }
      return value
        ? setInput({ ...input, [iconProp]: 'exclamation', [colorProp]: 'red' })
        : setInput({ ...input, [iconProp]: 'exclamation', [colorProp]: 'grey' });
    };

    switch (e.currentTarget.name) {
      case 'name':
        return changeState('iconName', 'colorName');
      case 'phone':
          return changeState('iconPhone', 'colorPhone');
      case 'email':
        return changeState('iconEmail', 'colorEmail');
      case 'password':
        return changeState('iconPassw', 'colorPassw');
      case 'password_repeat':
        return changeState('iconPasswRepeat', 'colorPasswRepeat');
      default:
        return null;
    }
  };

  return (
    <div className={styles.inputForm}>
      <div className={styles.inputTitles}>
  <p>{inputTitle}</p> 
      </div> 
      <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input
              style={{ borderColor: input[inputColor] }}
              onChange={changeInput}
              className="input"
              type={type}
              name={name}
              placeholder={placeholder}
              autoComplete="on"
              minLength={minLength}
              required
            />
            <InputIcon side="left" icon={iconLeft} />
            <InputIcon side="right" icon={input[iconRight]} />
        </p>
      </div>
    </div>

  );
}

export default InputField;
