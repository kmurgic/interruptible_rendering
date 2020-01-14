import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <ul>
    <li>
      <Link to="/blocking">Blocking Mode Article Finder</Link>
    </li>
    <li>
      <Link to="/concurrent">Concurrent Mode Article Finder</Link>
    </li>
  </ul>
)


export default Home;
