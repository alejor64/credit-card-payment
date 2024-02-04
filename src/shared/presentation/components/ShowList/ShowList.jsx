import React from 'react';
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

export default ShowList;