import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => { 
    const navigate = useNavigate(); 
    const handleLoginClick = () => {
        navigate('/login')
    }
  return (
    <div className="home-container">
      <h2>This is the Home Page</h2> 
      <button type='button' onClick={handleLoginClick}>login</button>
    </div>
  );
};

export default Home;
