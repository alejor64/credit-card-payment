import React from 'react';
import PropTypes from 'prop-types';

const TextInfo = ({label = '', text}) => {
  return (
    <div className='text-info-container'>
      {
        label && <label className='title'>{label}: </label>
      }
      <p className='text'>{text}</p>
    </div>
  )
};

TextInfo.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

TextInfo.defaultProps = {
  label: '',
};

export default TextInfo;