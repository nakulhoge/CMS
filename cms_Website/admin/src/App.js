import React from "react";
import {Routes, Route } from "react-router-dom";
import "./App.css"; 
import Addpost from "./components/Addposts";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Addnewpage from "./components/Addnewpage";
import Edityourpages from "./components/Edityourpages";
import EditPage from "./components/Editpage";
import Addblogs from "./components/Addblogs";


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      
      <div className="content-container">
       
          <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/Addnewpage" element={<Addnewpage />} />
          <Route path="/Edityourpages" element={<Edityourpages />} />
          <Route path="/Addblogs" element={<Addblogs />} />
          <Route path="/editpage/:id" element={<EditPage />} />
          <Route path="/" element={<Addpost />} />
          <Route path="/" element={<Footer />} />
          </Routes>
      
      </div>
    </div>
  );
}

export default App;
