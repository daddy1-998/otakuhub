import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const  handleOut = (e)=>{
    e.preventDefault();
    setOpenNav(false);
  }



  const links = [
    { to: "/", label: "AnimeTrending" },
    { to: "/about", label: "About" },
  ]
  const handleOpenNav = () => {
 
    setOpenNav((prevSetOpenNav) => !prevSetOpenNav)

  }
  return (
    <>
      <header className='w-full h-[70px]   p-[2%]  flex items-center justify-between bg-[#282828] text-white relative'>
        <div className=''>
          <h1 className='font-NIRVANA text-[2em] md:text-[3em] text-bold tracking-[5px] uppercase '>Otaku<span className='text-primary '>Hub</span> </h1>
        </div>

        <nav
          
          className={`font-Poppins uppercase bg-red-500 absolute left-0 top-[70px] z-50 w-full h-[150px] p-[2%] flex items-center justify-center  gap-[20px] md:static md:w-auto md:h-auto md:bg-transparent md:translate-x-0 duration-500 transition-translate ${openNav ? "translate-x-0" : "-translate-x-[100%]"}`}>

          <ul className='flex flex-col items-center justify-center gap-5 md:flex-row'>

            {links.map((link, index) => {
              const { to, label } = link
              return (
                <li key={index}>
                  <Link to={to} className="text-white" >{label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {openNav ? (<IoClose onClick={handleOpenNav} className='block md:hidden text-[2em] cursor-pointer' />) : (<CiMenuFries onClick={handleOpenNav} className='block md:hidden text-[2em] cursor-pointer' />)}
      </header>
    </>
  )
}

export default Header