import React from 'react'
import Home from './Home'
import AvailableBuses from "./AvailableBuses"
import Login from "./Login"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Local strorage >>details will remain untill the clear browsing history ans cookies
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
            {(localStorage.getItem("user"))?<>
            <Route path="/home" exact element={<Home/>}/>
            <Route path="/bus" exact element={<AvailableBuses/>}/>
            </>:
            <> </> } 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;