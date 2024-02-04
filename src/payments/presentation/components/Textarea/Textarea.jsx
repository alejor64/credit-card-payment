import React from 'react';
import './Textarea.scss';

const Textarea = ({title, name, onChange, value}) => {
  return (
    <div className='textarea-contianer'>
      <label htmlFor={name}>{title}</label>
      <textarea
        autoComplete="off"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
};

export default Textarea;