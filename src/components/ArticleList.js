import React from 'react';
import Article from './Article';

const ArticleList = React.memo(({ articles, articleLength, filterText, lag }) => (
  <>
    {!articles.length && <p>No results for {filterText}</p>}
    {articles.map((article) => (
      <Article
        key={article.id}
        body={article.body}
        lag={lag}
        length={articleLength}
        title={article.title}
      />
    ))}
  </>
));

ArticleList.propTypes = {

}

export default ArticleList;
