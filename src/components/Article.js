import React from 'react';

const Article = props => {
  const now = performance.now();
  while (performance.now() - now < 3) {
    // Simulate slow loading time for articles
  }
  const { body, length, title } = props;
  return (
    <article >
      <h3>{title}</h3>
      <p>{body.slice(0, length) + ' ...'}</p>
    </article>
  )
}

export default Article;
