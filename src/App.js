import React from 'react';
import { useQueryClient } from "react-query"
import Navbar from "./components/Navbar"
import { Search } from "./components/Search"
import Main from "./pages/Main/Main"
import Surat from "./pages/Surat/Surat"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

function App() {
  return (
    <div className='min-h-fit font-gl'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<Main />}></Route>
          <Route path={`search/`} element={<Search />}></Route>
          <Route path={`surat/:nomor`} element={<Surat />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
