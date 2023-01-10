import Header from './components/Header'
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Articles from './components/Articles';
import SingleArticleComments from './components/SingleArticleComments';
import SingleArticle from './components/SingleArticle';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route path="/article/:article_id/comments" element={<SingleArticleComments />} />
      </Routes>
    </div>
  );
}

export default App;
