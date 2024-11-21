// import { motion } from "framer-motion";
// import React from "react";
// import Image from "next/image";



// const HomePage = () => {
//   return (
//     <div className="relative z-0 flex flex-col items-start bg-gray-800 text-white font-poppins">
//       {/* Background Group Image */}
//       <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
//         <motion.div
//           className="h-[514px] w-[514px] bg-cover"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//         <img src="/doodles mixed round.png" alt="" />
//         </motion.div>
//         </div>
//       <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
//         <motion.div
//           className="h-[514px] w-[514px] bg-cover"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
        
//           <img src="/Group2346.png" alt="image1" className="h-full w-full" />
          
//         </motion.div>
//       </div>
      

//       {/* Logo */}
//       <motion.div
//         className="absolute left-24 top-10 text-4xl font-bold font-oswald"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         MHK
//       </motion.div>

//       {/* Navigation */}
//       <nav className="self-stretch flex justify-end gap-12 pr-16 pt-10">
//         {["Home", "About Me", "Contact"].map((item, index) => (
//           <motion.div
//             key={index}
//             className="text-lg"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             {item}
//           </motion.div>
//         ))}
//       </nav>

//       {/* Hero Section */}
//       <motion.div
//         className="flex flex-col items-center justify-center text-center mt-24"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-6xl md:text-8xl font-bold leading-tight">
//           CREATIVE UI{" "}
//           <span className="text-lightseagreen">DESIGNER</span>
//         </h1>

//         <div className="flex flex-wrap justify-center gap-6 mt-8">
//           <motion.button
//             className="px-8 py-4 bg-lightseagreen rounded-lg text-lg"
//             whileHover={{ scale: 1.1 }}
//           >
//             Hire Me
//           </motion.button>
//           <motion.button
//             className="px-8 py-4 bg-gray-700 rounded-lg text-lg flex items-center gap-2"
//             whileHover={{ scale: 1.1 }}
//           >
//             Download CV <img className="w-6 h-6" src="/download.png" />
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Ellipse and Vector */}
//       <motion.div
//         className="absolute bottom-20 right-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         <img className="w-[348px]" />
//       </motion.div>
//       <img src="/Vector 187.png" className="absolute left-20 bottom-40 h-60 w-20" />

//       {/* Social Media */}
//       <div className="flex justify-center gap-4 mt-10">
//         <motion.div
//           className="h-24 w-24 bg-gray-700 rounded-full flex items-center justify-center"
//           whileHover={{ scale: 1.1 }}
//         >
//           <img src="/Group 2347.png " className="h-10 w-10" />
//         </motion.div>
//         {/* Add other social media icons similarly */}
//       </div>
//     </div>
//   );
// };

// export default HomePage;







// import { motion } from "framer-motion";
// import Navbar from "./Navbar"; // Import the responsive navbar

// const HomePage = () => {
//   return (
//     <div>
      
//     <div className="relative z-0 bg-gray-800 text-white font-poppins h-screen">
//     <Navbar/>
//       {/* Main Section */}
//       <div className="relative min-h-screen flex flex-col lg:flex-row justify-between items-center px-6 lg:px-24 py-16 lg:py-0">
        
//         {/* Text Content (left side) */}
//         <motion.div
//           className="flex flex-col mt-4 justify-center items-start space-y-6 text-left z-10 lg:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
//             CREATIVE UI <span className="text-lightseagreen text-cyan-600">DESIGNER</span>
//           </h1>

//           <div className="flex flex-wrap gap-4 mt-8">
//             <motion.button
//               className="px-8 py-4 bg-lightseagreen rounded-lg text-lg  bg-cyan-600"
//               whileHover={{ scale: 1.1 }}
//             >
//               Hire Me
//             </motion.button>
//             <motion.button
//               className="px-8 py-4 bg-gray-700 rounded-lg text-lg flex items-center gap-2"
//               whileHover={{ scale: 1.1 }}
//             >
//               Download CV <img className="w-6 h-6" src="/download.png" alt="Download" />
//             </motion.button>
//           </div>
//         </motion.div>
//         <motion.div
//         className="absolute bottom-20 right-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         <img className="w-[348px]" />
//       </motion.div>
//       <img src="/Vector 187.png" className="absolute left-0 bottom-40 h-40 w-20" />


//         {/* Background Images (right side) */}
//         <div className="absolute right-0 top-0  mt-8 lg:mt-0 flex flex-col justify-center items-end space-y-4 text-left z-10 ">
//           {/* First image */}
//           <motion.div
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px]"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <img src="/doodles mixed round.png" alt="Doodles" />
//           </motion.div>
//           {/* Second image */}
//           <motion.div
//             className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[200px] sm:w-[300px] lg:w-[400px]"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <img src="/Group2346.png" alt="Group Image" />
//           </motion.div>
//         </div>
//       </div>

//       {/* Social Media */}
//       {/* <div className="flex justify-center absolute">
//         <motion.div
//           className="h-24 w-24 bg-gray-700 rounded-full flex items-center justify-center"
//           whileHover={{ scale: 1.1 }}
//         >
//           <img src="/Group 2347.png" className="h-10 w-10" alt="Social Media Icon" />
//         </motion.div>
//         Add more icons as needed
//       </div> */}
//     </div>
//     </div>
//   );
// };

// export default HomePage;








// import { motion } from "framer-motion";
// import Navbar from "./Navbar"; // Import the responsive navbar

// const HomePage = () => {
//   return (
//     <div className="relative z-0 bg-gray-800 text-white font-poppins min-h-screen">
//       <Navbar />

//       {/* Main Section */}
//       <div className="relative min-h-screen flex flex-col lg:flex-row justify-between items-center px-6 lg:px-24 py-16 lg:py-0">
        
//         {/* Text Content (left side) */}
//         <motion.div
//           className="flex flex-col mt-4 justify-center items-start space-y-6 text-left z-10 lg:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
//             CREATIVE UI <span className="text-lightseagreen text-cyan-600">DESIGNER</span>
//           </h1>

//           <div className="flex flex-wrap gap-4 mt-8">
//             <motion.button
//               className="px-6 py-3 sm:px-8 sm:py-4 bg-lightseagreen rounded-lg text-base sm:text-lg bg-cyan-600"
//               whileHover={{ scale: 1.1 }}
//             >
//               Hire Me
//             </motion.button>
//             <motion.button
//               className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-700 rounded-lg text-base sm:text-lg flex items-center gap-2"
//               whileHover={{ scale: 1.1 }}
//             >
//               Download CV <img className="w-5 sm:w-6 h-5 sm:h-6" src="/download.png" alt="Download" />
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Right-side Images */}
//         <motion.div
//           className="absolute bottom-20 right-10 md:right-20"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//         >
//           <img className="w-[200px] md:w-[348px]" src="/your-image.png" alt="" />
//         </motion.div>
//         <img src="/Vector 187.png" className="absolute left-0 bottom-40 h-20 md:h-40 w-10 md:w-20" alt="Vector Decoration" />

//         {/* Background Images (right side) */}
//         <div className="absolute right-0 top-3 mt-8 lg:mt-3 flex flex-col justify-center items-end space-y-4 text-left z-10">
//           {/* First image */}
//           <motion.div
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[200px] sm:w-[300px] lg:w-[400px]"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <img src="/doodles mixed round.png" alt="Doodles" />
//           </motion.div>
//           {/* Second image */}
//           <motion.div
//             className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[150px] sm:w-[250px] lg:w-[350px]"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <img src="/Group2346.png" alt="Group Image" />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from 'react'

// const HomePage = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Hi , I'm <br /><span>Web UI/UX Designer</span></h1>
//           <button >Hire me</button>
//         </div>
//         <div>
//           {/* image */}
//           <img src="public\another\image.png" alt="my pic" />
//           {/* Background of image */}
//           <img src="public\another\yellow-bg.png" alt="background" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default HomePage











// final
// import React from 'react';

// const HomePage = () => {
//   return (
//     <>
//       <div className="min-h-screen flex  bg-gray-100 ">
//         {/* Intro Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 ml-8">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 ">
//             Hi, I'm <br />
//             <span className="text-blue-500">Web UI/UX Designer</span>
//           </h1>
//           <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300">
//             Hire me
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-start top-0 right-0">
//           {/* Background Image */}
//           <img
//             src="/another/yellow-bg.png"
//             alt="background"
//             className="absolute top-0 right-0 w-[400px] md:w-[550px] h-auto"
//           />
//           {/* Main Image */}
//           <img
//             src="/another/image.png"
//             alt="my pic"
//             className="relative w-[150px] md:w-[300px] h-auto mt-15  md:mt-20 z-10"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;







//pakkkkka


// import React from 'react';

// const HomePage = () => {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
//         {/* Intro Section */}
//         <div className="w-1/8  md:w-1/2 flex flex-col items-start justify-center space-y-6 ml-8 order-2 md:order-1 ">
//           <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
//             Hi, I'm <br />
//             <span className="text-blue-500">Web UI/UX Designer</span>
//           </h1>
//           <button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300">
//             Hire me
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-start top-0 right-0 order-1 md:order-2">
//           {/* Background Image */}
//           <img
//             src="/another/yellow-bg.png"
//             alt="background"
//             className="absolute top-0 right-0 w-[400px] md:w-[700px] h-auto"
//           />
//           {/* Main Image */}
//           <img
//             src="/another/image.png"
//             alt="my pic"
//             className="relative w-[300px] md:w-[400px] h-auto mt-15 md:mt-15 z-10 left-20 sm:ml-8 md:left-10  "
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;








// import React from 'react';

// const HomePage = () => {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row  bg-gray-100 overflow-hidden">
//         {/* Intro Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 px-4 md:px-8 order-2 md:order-1">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
//             Hi, I'm <br />
//             <span className="text-blue-500">Web UI/UX Designer</span>
//           </h1>
//           <button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300">
//             Hire me
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-start order-1 md:order-2">
//           {/* Background Image */}
//           <img
//             src="/another/yellow-bg.png"
//             alt="background"
//             className="absolute top-0 right-0 w-[100%] md:w-[1400px] h-auto object-cover"
//           />
//           {/* Main Image */}
//           <img
//             src="/another/image.png"
//             alt="my pic"
//             className="relative w-[80%] md:w-[450px] h-auto mt-5 z-10 sm:ml-4 md:ml-10"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;









// import React from 'react';

// const HomePage = () => {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 overflow-hidden">
//         {/* Intro Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 px-4 md:px-8 order-2 md:order-1">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
//             Hi, I'm <br />
//             <span className="text-blue-500">Web UI/UX Designer</span>
//           </h1>
//           <button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300">
//             Hire me
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-start order-1 md:order-2">
//           {/* Background Image */}
//           <img
//             src="/another/yellow-bg.png"
//             alt="background"
//             className="absolute top-0 right-0 w-[90%] md:w-[120%] h-auto object-cover"
//           />
//           {/* Main Image */}
//           <img
//             src="/another/image.png"
//             alt="my pic"
//             className="relative w-[70%] md:w-[450px] h-auto mt-5 z-10 sm:ml-4 md:ml-10"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;









// import React from 'react';

// const HomePage = () => {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 overflow-hidden">
//         {/* Intro Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 px-4 md:px-8 order-2 md:order-1">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
//             Hi, I'm <br />
//             <span className="text-blue-500">Web UI/UX Designer</span>
//           </h1>
//           <button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300">
//             Hire me
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-start order-1 md:order-2">
//           {/* Background Image */}
//           <img
//             src="/another/yellow-bg.png"
//             alt="background"
//             className="absolute top-0 right-0 w-full h-auto md:w-[120%] object-cover"
//           />
//           {/* Main Image */}
//           <img
//             src="/another/image.png"
//             alt="my pic"
//             className="relative w-[80%] md:w-[400px] h-auto mt-5 z-10 sm:ml-4 md:ml-10"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;










// final and responsive

// import React from 'react';
// import Navbar from './Navbar';

// const HomePage = () => {
//   return (
//     <>
//     <Navbar/>
//       <div className="min-h-screen  justify-center items-center md:flex-row bg-gray-900 overflow-hidden">
//          {/* Image Section */}
//          <div className="relative w-full md:w-1/2 flex items-end order-1 md:order-2">
//           {/* Background Image */}
//           <img
//             src="another\cyan-bg (1).png"
//             alt="background"
//             className=" my-element absolute top-0 right-0 w-50% h-auto md:w-[120%] sm: xl:w-[70%]  -mt-10 md:-mt-0 " // Adjusting negative margin for small devices
//           />
          
//         </div>
//         {/* Intro Section */}
//         <div className="w-full  flex flex-col items-start justify-center space-y-6 px-4 md:px-8 order-2 md:order-1 z-10">
//           <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold text-slate-600 leading-tight">
//             Hi, I'm <br />
//             <span className="text-cyan-700">Web UI/UX Designer</span>
//           </h1>
//           <button className="px-8 py-4 text-lg xl:text-3xl lg:text-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg shadow-lg hover:from-cyan-700 hover:to-cyan-500 transition duration-300">
//             Hire me
//           </button>
//         </div>

       
//       </div>
//     </>
//   );
// };

// export default HomePage;



import React from 'react';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';


const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div id='home' className=" home relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 overflow-hidden">
      
        {/* Image Section - Positioned in the background */}
        <div className="background-home absolute top-0 right-0 w-50%  md:w-[70%] lg:w-[50%]  sm:w-[80%] xl:w-[31%]  ">
          <Image
            src="/another/cyan-bg (1).png"
            alt="background"
            width={500}
            height={500}
            className="w-full h-full object-cover opacity-50 md:opacity-50" // Adjust opacity for visibility
          />
        </div>

        {/* Intro Section - Text content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 flex flex-col items-start justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Hi, I'm <br />
            <span  className="text-cyan-400">Muhammad Hammad Khan</span><br />
            <span className="text-cyan-700">Web UI/UX Designer</span>
          </h1>
          <button className="px-8 py-4 text-lg xl:text-3xl lg:text-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg shadow-lg hover:from-cyan-700 hover:to-cyan-500  transition-transform duration-300 ease-in-out transform hover:scale-110">
            Hire me
          </button>
          <div className='flex flex-row  m-2 gap-10 text-5xl'>
          < FaGithub className="text-white hover:text-cyan-400 transition-colors duration-300 " />
        <FaLinkedin  className="text-white hover:text-cyan-400 transition-colors duration-300 "/>
        <FaTwitter  className="text-white hover:text-cyan-400 transition-colors duration-300 " />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
