import React from 'react'
import Article from './Article';
import BackToHome from './BackToHome';

const ArticleFinder = ({
  articles, articleLength, handleChange, searchText, title
}) => (
    <div>
      <BackToHome />
      <h2>{title}</h2>
      <h4>
        Find me articles about
      <input
          type='text'
          value={searchText}
          onChange={handleChange}
        />
      </h4>
      {!articles.length && <p>No results for {searchText}</p>}
      {articles.map((article, index) => (
        <Article
          key={'article-' + index}
          body={article.body}
          length={articleLength}
          title={article.title}
        />
      ))}
    </div>
  );

export default ArticleFinder;