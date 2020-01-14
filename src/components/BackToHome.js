import React from 'react';
import { Link } from 'react-router-dom';

const BackToHome = props => (
  <div>
    <Link to="/">
      {'<<< Back To Home Page'}
    </Link>
  </div>
);


export default BackToHome;
