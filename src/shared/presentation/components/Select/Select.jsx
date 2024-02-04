import React from 'react';
import PropTypes from 'prop-types';
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

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select