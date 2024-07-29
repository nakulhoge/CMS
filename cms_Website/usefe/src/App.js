import "./App.css";


import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Edreamz from "./Components/Edreamzz";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PageDetails from "./Components/PageDetails";
import Blogs from "./Components/Blogs";
import BlogDetails from "./Components/BlogDetails";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/" element={<Edreamz />} />
        <Route path="/page/:title" element={<PageDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
