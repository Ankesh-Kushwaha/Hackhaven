import Landing from "./components/Landing/Landing";
import Login from "./components/Login_Sign/Login";
import Signup from "./components/Login_Sign/Signup";
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import HomePage from "./components/HomPage/HomePage";
import CreatePost from "./components/Post/CreatePost";
import About from "./components/About/About";
<<<<<<< HEAD
import  Contact  from "./components/About/Contact";
import Features from "./components/Landing/Features";
import Footer from "./components/Landing/Footer";
import Post from "./components/Post/Post";
=======
import Contact from "./components/Contact";
import Features from "./components/Landing/Features";
import Footer from "./components/Landing/Footer";
import { ToastContainer } from "react-toastify";
import CaseView from "./components/Post/CaseView";
>>>>>>> Amankumar140-main

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-case" element={<CreatePost />} />
<<<<<<< HEAD
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/features" element={<Features/>}></Route>
          <Route path="/post" element={<Post/>}></Route>

=======
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/caseview/:id"  element={<CaseView/>}></Route>
>>>>>>> Amankumar140-main
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
