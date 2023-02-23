import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Articles from './components/Articles';
import Topics from './components/Topics';
import ArticlesByTopic from './components/ArticlesByTopic';
import SingleArticleComments from './components/SingleArticleComments';
import SingleArticle from './components/SingleArticle';
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [currentUser] = useState(
    {
      username: 'jessjelly',
      name: 'Jess Jelly',
      avatar_url:
        'https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141'
    }
  )

  return (
    <div className="App">
      <Header />
      <Login />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<ArticlesByTopic />} />
        <Route path="/article/:article_id" element={<SingleArticle user={currentUser} />} />
        <Route path="/article/:article_id/comments" element={<SingleArticleComments />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
