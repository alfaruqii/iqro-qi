import React, { useEffect, useState, createContext } from 'react';
import Navbar from "./components/Navbar"
import Main from "./pages/Main/Main"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { IqroProvider } from "./IqroProvider"

function App() {
  return (
    <IqroProvider>
      <div className='min-h-fit'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='*' element={<Main />}></Route>
            <Route path={`/surat/1`} element={<Main />}></Route>
          </Routes>
        </Router>
      </div >
    </IqroProvider>
  );
}

export default App;
