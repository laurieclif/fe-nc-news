import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import ArticleList from "./components/ArticleList.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/articles" element={<ArticleList/>}></Route>
      </Routes>
    </>
  )
}

export default App
