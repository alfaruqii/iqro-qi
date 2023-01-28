import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"
import Main from "./pages/Main/Main"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

function App() {
  return (
    <div className='min-h-fit'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<Main />}></Route>
          <Route path={`/surat/1`} element={<Main />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
