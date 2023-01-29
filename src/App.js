import React from 'react';
import { useQueryClient } from "react-query"
import Navbar from "./components/Navbar"
import Main from "./pages/Main/Main"
import Surat from "./pages/Surat/Surat"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

function App() {
  return (
    <div className='min-h-fit'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path={`surat/*`} element={<Surat />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
