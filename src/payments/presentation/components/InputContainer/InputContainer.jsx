import React from 'react';
import './InputContainer.scss';

const ErroContainer = ({msg}) => <div className='error-container'><label className='error'>{msg}</label></div>;

const InputContainer = ({title, placeholder, onChange, name, value, errorMsg = '', required = true}) => {
  return (
    <div className='input-contianer'>
      <label htmlFor={name}>{title}</label>
      <input
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        name={name}
        value={value}
        required={required}
      />
      {
        errorMsg && <ErroContainer msg={errorMsg} />
      }
    </div>
  )
}

export default InputContainer