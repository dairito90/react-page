import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className='title'> SMART BUSINESS TECHNOLOGY</h1>
        <p>“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.”</p>
        <Link className='button' to='/about'>
          About Us
        </Link>
      </div>
    );
  }
}

export default Home;
