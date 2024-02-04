import React from 'react';

export const TextInfo = ({label = '', text}) => {
  return (
    <div className='text-info-container'>
      {
        label && <label className='title'>{label}: </label>
      }
      <p className='text'>{text}</p>
    </div>
  )
};