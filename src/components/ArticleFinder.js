import React from 'react'
import BackToHome from './BackToHome';
import ArticleList from './ArticleList';

const ArticleFinder = ({
  articles, articleLength, handleChange, filterText, lag, searchText, title
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
      <ArticleList
        articles={articles}
        articleLength={articleLength}
        filterText={filterText}
        lag={lag}
      />
    </div>
  );

export default ArticleFinder;