import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Signup';
import Articles from './components/Articles';
import ArticlesByPage from './components/ArticlesByPage';
import Topics from './components/Topics';
import Login from './components/Login';
import ArticlesByTopic from './components/ArticlesByTopic';
import SingleArticleComments from './components/SingleArticleComments';
import SingleArticle from './components/SingleArticle';
import AddArticle from './components/AddArticle'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles" element={<ArticlesByPage />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<ArticlesByTopic />} />
        <Route path="/articles/create" element={<AddArticle />}/>
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route path="/article/:article_id/comments" element={<SingleArticleComments />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
