'use client'

import HomePage from "./components/HomePage";
import React from "react";
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
   <>
   <div>
 {/* <Navbar/> */}
  <HomePage/>
  <About/>
  <Projects/>
  <Contact/>
   </div>
   </>
  );
}
