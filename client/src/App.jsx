import   React from 'react'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App

