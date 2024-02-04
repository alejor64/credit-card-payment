import React from 'react';
import './NotFound.scss';
import { useNavigate } from 'react-router-dom';
import { productsRoute } from '../../../catalog/infrastructure/routes';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might be in another castle.</p>
      <div className='btn-section'>
        <button className='back' onClick={() => navigate(productsRoute)}>Go to products</button>
      </div>
    </div>
  );
};

export default NotFound;