import React from 'react';

const Article = (props) => {
  const { body, lag, length, title } = props;
  const now = performance.now();
  while (performance.now() - now < lag) {
    // Simulate slow loading time for articles
  }
  return (
    <article >
      <h3>{title}</h3>
      <p>{body.slice(0, length) + ' ...'}</p>
    </article>
  )
};

export default Article;
