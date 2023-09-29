

import React, { useState } from 'react';

import './App.css';
import Home from './pages/Home'
import CreatePost from './pages/createPost'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { signOut } from 'firebase/auth'

// import { useNavigate } from 'react-router-dom';//navigates to the dseired page;



function App() {

  // const navigate = useNavigate();
  // const [isAuth, setIsAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut().then(() => {
      localStorage.clear();
      setIsAuth(false);
      // navigate("/login ");
      window.location.pathname = '/login'
    })
  }
  return (

    <Router>
      <nav>
        <Link to='/'>Home</Link>
        {!isAuth ? (<Link to='/login'>Login</Link>)
          : (

            <>
              <Link to='/createPost'>CreatePost</Link>

              <button onClick={signUserOut}> Log Out</button>
            </>
          )}
      </nav>


      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createPost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

      </Routes>
    </Router >
  );
}

export default App;
