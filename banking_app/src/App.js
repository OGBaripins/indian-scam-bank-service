import React, { Component }  from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

import FooterBar from './utils/footerBar';
import HeaderBar from './utils/headerBar';
import MainForm from './views/mainForm';
import Login from './views/login';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBar/>
        <Routes>
          <Route
                path="/"
                element={<MainForm/>}
              />
          <Route
                path="/login"
                element={<Login/>}
              />
        </Routes>
        <FooterBar/>
      </Router>
    </div>
  );
}

export default App;
