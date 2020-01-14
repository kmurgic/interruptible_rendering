import React, { useState } from 'react'
import loremIpsumArticles from '../loremIpsumArticles';
import useWindowWidth from '../hooks/useWindowWidth';
import ArticleFinder from '../components/ArticleFinder';

const ArticleFinderContainer = () => {
  const [searchText, setSearchText] = useState('');

  //update article length when screensize changes
  const windowWidth = useWindowWidth();
  const articleLength = Math.floor(Math.pow(windowWidth, 1.5) / 35);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const filteredArticles = loremIpsumArticles.filter(
    article => (
      article.title.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <ArticleFinder
      articles={filteredArticles}
      articleLength={articleLength}
      handleChange={handleChange}
      searchText={searchText}
    />
  );
};

export default ArticleFinderContainer;