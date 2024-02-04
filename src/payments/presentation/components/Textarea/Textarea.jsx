import React from 'react';
import PropTypes from 'prop-types';
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

Textarea.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Textarea;