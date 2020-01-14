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
    <li>
      <Link to="/debounced">Debounced Article Finder</Link>
    </li>
    <li>
      <Link to="/debounced-fast">Debounced Article Finder (High Performance)</Link>
    </li>
    <li>
      <Link to="/concurrent-fast">Concurrent Mode Article Finder (High Performance)</Link>
    </li>
  </ul>
)


export default Home;
