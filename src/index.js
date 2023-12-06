import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Outdoor Adventure/Home';
import About from './Outdoor Adventure/About';
import Services from './Outdoor Adventure/Services';
import Project from './Outdoor Adventure/Project';
import Contact from './Outdoor Adventure/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<App/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Services' element={<Services/>}/>
  <Route path='/Project' element={<Project/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  
 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
