import React from 'react';
import './Alert.css';

const Button = ({ onAlert }) => {
  return <button onClick={onAlert} className="delete" />;
};

export default Button;
