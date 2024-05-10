import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import ArticleList from "./components/ArticleList.jsx";
import SingleArticlePage from './components/SingleArticlePage.jsx';
import TopicList from "./components/TopicList.jsx"

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/articles" element={<ArticleList/>}></Route>
        <Route path="articles/:article_id" element={<SingleArticlePage/>}></Route>
        <Route path="/topics" element={<TopicList/>}></Route>
        <Route path="/topics/:slug/articles" element={<ArticleList/>}></Route>
      </Routes>
    </>
  )
}

export default App
