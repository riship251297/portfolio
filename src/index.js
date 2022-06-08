import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Projects from '../src/components/Projects/Projects';
import Research from './components/Research/Research';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/research" element={<Research />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
