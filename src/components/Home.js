import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <ul>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}blocking`}
      >
        Blocking Mode Article Finder
      </Link>
    </li>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}concurrent`}
      >
        Concurrent Mode Article Finder
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/debounced`}>
        Debounced Article Finder
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/debounced-fast`}>
        Debounced Article Finder (High Performance)
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/concurrent-fast`}>
        Concurrent Mode Article Finder (High Performance)
      </Link>
    </li>
  </ul>
)


export default Home;
