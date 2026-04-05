// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './Page/Books';
import Home from './Page/Home';

function App() {

  return (
  <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/Books" element = {<Books />} />
  </Routes>
  );
}

export default App
