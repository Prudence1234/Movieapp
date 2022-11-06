import React from 'react'
import '../App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Account from './Account';
import Home from './Home';
import Button from './Button';

const Nav = () => {
  return (
    <div>
    
    <BrowserRouter>
    <div className='nav'>
        <div>
          <NavLink to="/Home">
            <i className='fa fa-light fa-house'></i>
          </NavLink>
        </div>
        <div>
            <NavLink to="/Search">
                <i className='fa fa-solid fa-magnifying-glass'></i>
            </NavLink>
        </div>
        
        <div>
            <NavLink to="/Account">
                <i className='fa fa-regular fa-user' ></i>
            </NavLink>
        </div>
    </div>
    <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Button" element={<Button />} />
        <Route exact path="/Account" element={<Account />} />
    </Routes>
</BrowserRouter>
    </div>
    
  )
}

export default Nav