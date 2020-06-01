import React from 'react';
import InputField from './InputField';

function PassAndEmailInputs() {
  return (
    <>
      <InputField
        inputColor="colorEmail"
        type="email"
        name="email"
        placeholder="Email"
        minLength="3"
        iconLeft="envelope"
        iconRight="iconEmail"
        inputTitle="Enter your email"
      />

      <InputField
        inputColor="colorPassw"
        type="password"
        name="password"
        placeholder="Password"
        minLength="6"
        iconLeft="lock"
        iconRight="iconPassw"
        inputTitle="Enter your password"
      />
    </>
  );
}

export default PassAndEmailInputs;
