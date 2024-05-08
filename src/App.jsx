import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import ArticleList from "./components/ArticleList.jsx";
import SingleArticlePage from './components/SingleArticlePage.jsx';
import CommentsPage from './components/CommentsPage.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/articles" element={<ArticleList/>}></Route>
        <Route path="articles/:article_id" element={<SingleArticlePage/>}></Route>
        <Route path="articles/:article_id/comments" element={<CommentsPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
