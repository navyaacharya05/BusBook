import React from 'react';
import { Navbar } from './Navbar';
import {Menu} from './Menu';
import {Scroll} from './Scroll';

//import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App=()=>{
  return(
    <>
      <Navbar/>
      <Menu/>
      <Scroll/>
    </>
  )
}

export default App;