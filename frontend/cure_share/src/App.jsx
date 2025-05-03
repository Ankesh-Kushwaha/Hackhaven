import { useState } from "react";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login_Sign/Login";
import Signup from "./components/Login_Sign/Signup";
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import HomePage from "./components/HomPage/HomePage";
import CreatePost from "./components/Post/CreatePost";
import About from "./components/About/About";
import { Contact } from "lucide-react";
import Features from "./components/Landing/Features";

function App() {
  return (
    <>
       
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/features" element={<Features/>}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
