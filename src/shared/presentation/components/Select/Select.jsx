import React from 'react';
import './Select.scss';

const Select = ({title, options, onChange}) => {
  return (
    <div className='select-container'>
      <div className='title-section'>
        <h3>{title}</h3>
      </div>
      <div className='select-section'>
        <select onChange={onChange}>
          <option value='' defaultValue>-- Select method --</option>
          {
            options.map(opt => (
              <option
                value={opt.value}
                key={opt.value}
              >
                {opt.name}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
};

export default Select