import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BlockingArticleFinder from './containers/ArticleFinderContainer';
import DeferredArticleFinder from './containers/DeferredArticleFinderContainer';
import DebouncedArticleFinder from './containers/DebouncedArticleFinderContainer';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Interruptible Rendering (useDeferredValue) Demo</h1>
      <Router>
        <Switch>
          <Route path="/blocking">
            <BlockingArticleFinder />
          </Route>
          <Route path="/concurrent">
            <DeferredArticleFinder />
          </Route>
          <Route path="/debounced">
            <DebouncedArticleFinder />
          </Route>
          <Route path="/debounced-fast">
            <DebouncedArticleFinder fast />
          </Route>
          <Route path="/concurrent-fast">
            <DeferredArticleFinder fast />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
