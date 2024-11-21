
// import React from "react";

// export default function About() {
//   return (
//     <div className="flex  h-screen items-center justify-center bg-gray-900 ">
      
        
//           <div className="flex flex-1 flex-col items-start gap-8 md:self-stretch">
//             <h1
             
//               className="font-playfairdisplay text-[48px] font-bold text-white-a700 md:text-[44px] sm:text-[38px]"
//             >
//               About me
//             </h1>
//             <div className="flex flex-col items-start gap-8 self-stretch">
//               <p
                
//                 className="w-[86%] text-[24px] font-normal leading-[150%] text-gray-600 md:w-full md:text-[22px]"
//               >
//                 Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
//               </p>
//               <button
//                 color="cyan_800"
            
//                 className="min-w-[114px] rounded-lg px-6 sm:px-5 bg-cyan-700 p-2 m-2"
//               >
//                 Resume
//               </button>
//             </div>
//           </div>
//           <div className="w-[400px] rounded-[262px] bg-cyan-800 md:w-400px">
//             <img
//               src="another\pexels-artem-beliaikin-1832323-removebg-preview.png"
//               width={524}
//               height={524}
//               alt="Profile Image"
//               className="h-[524px]  rounded-[262px]  md:h-auto "
//             />
//           </div>
//         </div>

      
    
//   );
// }













import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="about" className=" about flex flex-row-reverse  min-h-screen overflow-ellipsis items-center justify-center bg-gray-900 px-4 md:px-12">
      {/* Main content */}
      <div className=" first flex flex-1 flex-col items-center gap-8 mb-6 md:mb-0   ">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2 ">
          About me
        </h1>
        <p className="w-[80%] text-xl font-normal text-gray-300">
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed placeat fugiat magni, ex aliquam illo quis quos iste natus architecto dolorum quas. Maiores impedit ullam officia, possimus enim vel! Tenetur iusto placeat exercitationem, vitae accusantium laborum totam magni optio et, hic illum commodi similique consectetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus fugiat, blanditiis iusto nostrum architecto aperiam sed deserunt at cum iste ipsam perspiciatis sunt fugit itaque et cumque autem. Unde vero ipsa hic ipsam, quia sint ducimus quas qui, voluptatem recusandae totam omnis. Et, illum.
        </p>
        <button
          className="min-w-[130px] rounded-lg px-6 sm:px-5 lg:text-3xl md:text-2xl sm:text-xl  py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-500 text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="second w-[150px] md:w-[350px] lg:w-[350px] xl:w-[550px] rounded-[150px] md:rounded-[262px] bg-cyan-800 mt-8 md:mt-0 overflow-hidden ">
        <Image
          src="/another/mypicwithoutbackground.png"
          width={300}
          height={300}
          alt="Profile Image"
          className="w-full  rounded-[150px] md:rounded-[180px] xl:rounded-[220px] object-cover"
        />
      </div>
    </div>
  );
}
