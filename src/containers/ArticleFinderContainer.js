import React, { useState } from 'react'
import loremIpsumArticles from '../loremIpsumArticles';
import useWindowWidth from '../hooks/useWindowWidth';
import ArticleFinder from '../components/ArticleFinder';

const ArticleFinderContainer = () => {
  const [articles, setArticles] = useState(loremIpsumArticles);
  const [searchText, setSearchText] = useState('');
  console.log(articles);

  //update article length when screensize changes
  const windowWidth = useWindowWidth()
  const articleLength = Math.floor(Math.pow(windowWidth, 1.5) / 35)

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    setArticles(
      loremIpsumArticles.filter(
        article => (
          article.title.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  }

  return (
    <ArticleFinder
      articles={articles}
      articleLength={articleLength}
      handleChange={handleChange}
      searchText={searchText}
    />
  )

}

export default ArticleFinderContainer;