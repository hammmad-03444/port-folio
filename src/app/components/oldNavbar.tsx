// import { useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="w-full bg-gray-800 px-6 py-4 fixed top-0 z-10">
//       <div className="flex justify-between items-center">
//         <div className="text-2xl font-bold text-white">MHK</div>

//         {/* Hamburger Menu */}
//         <div className="lg:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={toggleMenu}
//           >
//             {isOpen ? (
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Nav Links */}
//         <div className={`lg:flex gap-8 text-white ${isOpen ? "block" : "hidden"} lg:block`}>
//           <motion.a href="#home" className="hover:text-lightseagreen">Home</motion.a>
//           <motion.a href="#about" className="hover:text-lightseagreen">About Me</motion.a>
//           <motion.a href="#contact" className="hover:text-lightseagreen">Contact</motion.a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// components/Navbar.tsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-none text-white z-50">
//       <nav className="container mx-auto flex items-center justify-between py-6 px-4">
//         <div className="text-2xl font-bold">MHK</div>
//         <div className="hidden md:flex space-x-8">
//           {["Home", "About Me", "Contact"].map((item) => (
//             <a href={`#${item.toLowerCase().replace(" ", "-")}`} key={item} className="hover:text-lightseagreen">
//               {item}
//             </a>
//           ))}
//         </div>

//         {/* Hamburger icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 py-4">
//             {["Home", "About Me", "Contact"].map((item) => (
//               <a href={`#${item.toLowerCase().replace(" ", "-")}`} key={item} className="block px-4 py-2 text-center hover:bg-gray-700">
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between  bg-slate-900 '>
      <Image src="/doodles mixed round.png" alt="" width={80}  className='p-2 m-2 bg-slate-200 rounded-full ' />
      <ul className='flex p-2 '>
        <li className='p-2 m-2 text-cyan-700 text-xl font-bold'><Link href="" >Home</Link></li>
        <li className='p-2 m-2 text-cyan-700 text-xl font-bold'><Link href="" >About</Link></li>
        <li className='p-2 m-2 text-cyan-700 text-xl font-bold'><Link href="" >Projects</Link></li>
        <li className='p-2 m-2 text-cyan-700 text-xl font-bold'><Link href="" >Contact Me</Link></li>
        
        <li></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar