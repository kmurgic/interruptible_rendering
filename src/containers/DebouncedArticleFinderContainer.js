import React, { useState, useMemo } from 'react';
import { useDebounce } from 'use-debounce';
import loremIpsumArticles from '../loremIpsumArticles';
import useWindowWidth from '../hooks/useWindowWidth';
import ArticleFinder from '../components/ArticleFinder';

const ArticleFinderContainer = ({ fast }) => {
  const [searchText, setSearchText] = useState('');
  const [filterText] = useDebounce(
    searchText,
    1000,
  );

  //update article length when screensize changes
  const windowWidth = useWindowWidth();
  const articleLength = Math.floor(Math.pow(windowWidth, 1.5) / 35);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const filteredArticles = useMemo(() => loremIpsumArticles.filter(
    article => (
      article.title.toLowerCase().includes(filterText.toLowerCase())
    )
  ), [filterText]);

  const title = fast
    ? 'Debounced Article Finder (High Performance)'
    : 'Debounced Article Finder';

  return (
    <ArticleFinder
      articles={filteredArticles}
      articleLength={articleLength}
      handleChange={handleChange}
      filterText={filterText}
      lag={fast ? 1 : 4}
      searchText={searchText}
      title={title}
    />
  );
};

export default ArticleFinderContainer;