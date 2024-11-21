import React from "react";
import Footer from "./Footer";


const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 pt-12 w-full min-h-screen flex flex-col justify-between">
      {/* Contact Form Section */}
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-16 lg:w-[70%]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Contact
        </h2>

        <form className="space-y-10">
          {/* Name Field */}
          <div className="flex flex-col w-full ">
            <label htmlFor="name" className="text-gray-500 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 p-4 border  rounded-md shadow-sm  focus:outline-none focus:shadow-outline"
              placeholder="Your name"
              style={{
                backgroundColor: 'rgba(128, 128, 128, 0.3)', // White with 80% opacity
                color: 'rgba(0, 255, 255, 0.8)', // Text color with 80% opacity
                border: '2px solid rgba(0, 255, 255, 0.5)', // Cyan with 50% opacity
              }}
              onFocus={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
    onBlur={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-500 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 p-4 border rounded-md shadow-sm  focus:outline-none focus:shadow-outline"
              placeholder="Your email"
              style={{
                backgroundColor: 'rgba(128, 128, 128, 0.3)', // White with 80% opacity
                color: 'rgba(0, 255, 255, 0.8)', // Text color with 80% opacity
                border: '2px solid rgba(0, 255, 255, 0.5)', // Cyan with 50% opacity
              }}
              onFocus={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
    onBlur={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col ">
            <label htmlFor="message" className="text-gray-500 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-4 p-6 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:shadow-outline h-32"
              placeholder="Your message"
              style={{
                backgroundColor: 'rgba(128, 128, 128, 0.3)', // White with 80% opacity
                color: 'rgba(0, 255, 255, 0.5)', // Text color with 80% opacity
                border: '2px solid rgba(0, 255, 255, 0.5)', // Cyan with 50% opacity
              }}
              
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg xl:px-10 xl:py-4 xl:text-xl shadow-md hover:bg-cyan-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Send
            </button>
          </div>
        </form>

      </div>

      {/* Footer Section */}
      <Footer/>
    </section>
  );
};

export default Contact;




















// import React from "react";
// import Footer from "./Footer";


// const Contact = () => {
//   return (
//     <section id="contact" className="bg-gray-900 pt-12 w-full min-h-screen ">
//       {/* Contact Form Section */}
//       <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
//           Contact
//         </h2>

//         <form className="space-y-6 w-full" >
//           {/* Name Field */}
//           <div className="flex flex-col w-full">
//             <label htmlFor="name" className="text-gray-500 font-semibold">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="mt-1 p-2 border  rounded-md shadow-sm  focus:outline-none focus:shadow-outline"
//               placeholder="Your name"
//               style={{
//                 backgroundColor: 'rgba(128, 128, 128, 0.3)', // White with 80% opacity
//                 color: 'rgba(0, 255, 255, 0.8)', // Text color with 80% opacity
//                 border: '2px solid rgba(0, 255, 255, 0.5)', // Cyan with 50% opacity
//               }}
//               onFocus={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
//     onBlur={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
//             />
//           </div>

//           {/* Email Field */}
//           <div className="flex flex-col w-full">
//             <label htmlFor="email" className="text-gray-500 font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 p-2 border rounded-md shadow-sm  focus:outline-none focus:shadow-outline"
//               placeholder="Your email"
//               style={{
//                 backgroundColor: 'rgba(128, 128, 128, 0.3)', // White with 80% opacity
//                 color: 'rgba(0, 255, 255, 0.8)', // Text color with 80% opacity
//                 border: '2px solid rgba(0, 255, 255, 0.5)', // Cyan with 50% opacity
//               }}
//               onFocus={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
//     onBlur={(e) => (e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.3)')}
//             />
//           </div>

//           {/* Message Field */}
//           <div className="flex flex-col w-full">
//             <label htmlFor="message" className="text-gray-500 font-semibold">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:shadow-outline h-32"
//               placeholder="Your message"
//               style={{
//                 backgroundColor: 'rgba(128, 128, 128, 0.3)', // White with 80% opacity
//                 color: 'rgba(0, 255, 255, 0.5)', // Text color with 80% opacity
//                 border: '2px solid rgba(0, 255, 255, 0.5)', // Cyan with 50% opacity
//               }}
              
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
//             >
//               Send
//             </button>
//           </div>
//         </form>

//       </div>

//       {/* Footer Section */}
//       <Footer/>
//     </section>
//   );
// };

// export default Contact;