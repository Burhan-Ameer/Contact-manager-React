import React from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"
import { ToggleContext } from './ToggleContext';
import { useState } from 'react'
const Applayout = () => {
  const [isopen, setisopen] = useState(true)
  return (
    <ToggleContext.Provider value={{ isopen, setisopen }}>
      <div className='text-black'>
        <Navbar />
        <div className="flex bg-amber-50">
          <Menu />
          <Outlet />
        </div>
      </div>
    </ToggleContext.Provider>
  )
}

export default Applayout