import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Signup';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Login from './components/Login';
import ArticlesByTopic from './components/ArticlesByTopic';
import SingleArticleComments from './components/SingleArticleComments';
import SingleArticle from './components/SingleArticle';
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [currentUser] = useState('')

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login user={currentUser}/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<ArticlesByTopic />} />
        <Route path="/article/:article_id" element={<SingleArticle user={currentUser} />} />
        <Route path="/article/:article_id/comments" element={<SingleArticleComments user={currentUser} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
