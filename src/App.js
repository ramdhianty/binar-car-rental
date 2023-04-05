// import React,{useState} from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import React from 'react';
import '../src/App.css';
import Homepage from "../src/pages/homepage"
import CarListPage from "../src/pages/carList";
import CarDetailPage from "../src/pages/carDetail";
// import NavigationBar from './component/NavigationBar';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/carList' element={<CarListPage/>}/>
          <Route path='/carList/:id' element={<CarDetailPage/>}/>
        </Routes>
      </Router>
        )
}

export default App;