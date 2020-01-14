import React, { useDeferredValue, useState } from 'react'
import loremIpsumArticles from '../loremIpsumArticles';
import useWindowWidth from '../hooks/useWindowWidth';
import ArticleFinder from '../components/ArticleFinder';

const ArticleFinderContainer = () => {
  const [searchText, setSearchText] = useState('');
  const deferredSearchText = useDeferredValue(
    searchText,
    { timeoutMs: 5000 },
  );

  //update article length when screensize changes
  const windowWidth = useWindowWidth();
  const articleLength = Math.floor(Math.pow(windowWidth, 1.5) / 35);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const filteredArticles = loremIpsumArticles.filter(
    article => (
      article.title.toLowerCase().includes(deferredSearchText.toLowerCase())
    )
  );

  return (
    <ArticleFinder
      articles={filteredArticles}
      articleLength={articleLength}
      handleChange={handleChange}
      searchText={searchText}
      title={'Concurrent Mode Article Finder'}
    />
  );
};

export default ArticleFinderContainer;