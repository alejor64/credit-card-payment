import React from 'react';
import PropTypes from 'prop-types';
import './ShowList.scss';

const ShowList = ({list, title, className = ''}) => {
  return (
    <div className={`list-container ${className}`}>
      <label>{title}: </label>
      <div className='list-wrapper'>
        {
          list?.map(itm => (
            <div key={itm} className='list'>
              <span>{itm}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
};

ShowList.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ShowList.defaultProps = {
  className: '',
};

export default ShowList;