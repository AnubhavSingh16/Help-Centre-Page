import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardForm from './components/CreateReq';
import MyState from '../context/CardContext';


function App() {
   
  return (
    <>
     <MyState>
      <Router>
      <Routes>
        <Route path="/" element={ <Header></Header>} />
        <Route path="/submit-request" element={<CardForm />} />
      </Routes>
    </Router>
    </MyState>
    </>
  )
}

export default App
