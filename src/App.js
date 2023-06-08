import React from 'react';
import { Navbar } from "./components/Navbar"
import { Search } from "./components/Search"
import { Tafsir } from "./components/Tafsir"
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
          <Route path={`tafsir/:nomor`} element={<Tafsir />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
