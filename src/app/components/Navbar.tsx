'use client'
import React, { useEffect } from 'react';



import { useState} from 'react';
import Link from 'next/link';

let lastScrollY=0;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar,setShowNavbar]=useState(true)
 

  useEffect(()=>{
  const controlNavbar=()=>{
    if(window.scrollY>lastScrollY){
      setShowNavbar(false)
    }
    else{
      setShowNavbar(true)
    }
    lastScrollY=window.scrollY
  }
  window.addEventListener('scroll',controlNavbar)
  return()=>{
    window.removeEventListener('scroll', controlNavbar)
  };
},[])



  return (
    <nav className={`bg-none  p-4  fixed top-0 w-full z-50 transition-transform duration-300 ${
    showNavbar ? "translate-y-0" : "-translate-y-full" } `}>
      <div className="container mx-auto flex justify-between p-4 m-4 px-10 rounded-full items-center bg-gray-800 bg-opacity-20 backdrop-blur-md">
        <h1 className="text-white text-3xl">MHK</h1>
        <div className="hidden md:flex space-x-4 gap-8">
          <Link href="#home" className= " text-white hover:text-cyan-500 text-2xl">Home</Link>
          <Link href="#about" className="text-white hover:text-cyan-500 text-2xl">About</Link>
          <Link href="#projects" className="text-white hover:text-cyan-500 text-2xl">Projects</Link>
          <Link href="#contact" className="text-white hover:text-cyan-500 text-2xl">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-transparent absolute right-0 mt-2  ">
          <Link href="#home" className="block text-white px-4 py-2 hover:bg-cyan-700 text-xl">Home</Link>
          <Link href="#about" className="block text-white px-4 py-2 hover:bg-cyan-700 text-xl">About</Link>
          <Link href="#projects" className="block text-white px-4 py-2 hover:bg-cyan-700 text-xl">Projects</Link>
          <Link href="#contact" className="block text-white px-4 py-2 hover:bg-cyan-700 text-xl">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
