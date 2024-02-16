import React from 'react'
import { Route, Routes} from 'react-router';
import Login from "./login/view/Login";
import Home from './home/view/Home';
import Profile from './profile/Profile';


const Router = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route  path='/:username/:password' element={<Login/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/home/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default Router