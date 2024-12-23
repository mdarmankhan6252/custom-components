import { useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import img_1 from '../assets/carousel/1.jpg'
import img_2 from '../assets/carousel/2.jpg'
import img_3 from '../assets/carousel/3.jpg'
import img_4 from '../assets/carousel/4.jpg'
import img_5 from '../assets/carousel/5.jpg'

const Carousel1 = () => {

   let [current, setCurrent] = useState(0)

   let preSlide = () => {
      if (current === 0) setCurrent(slides.length - 1)
      else setCurrent(current - 1)
   }

   let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0)
      else setCurrent(current + 1)
   }


   const slides = [
      img_1,
      img_2,
      img_3,
      img_4,
      img_5
   ]

   return (
      <div className="w-[60%] h-[70vh] object-cover mx-auto">
         <div className="my-10 overflow-hidden relative">
            <div className={`flex transition ease-out duration-1000`}
               style={{
                  transform: `translateX(-${current * 100}%)`
               }}
            >
               {slides.map((slide, i) => {
                  return <img key={i} src={slide} />
               })}
            </div>

            <div className="absolute top-1/2 flex items-center justify-between w-full px-2">
               <button onClick={preSlide}>
                  <IoIosArrowDropleftCircle className="bg-black text-3xl text-white rounded-full " />
               </button>

               <button onClick={nextSlide}>
                  <IoIosArrowDroprightCircle className="bg-black text-3xl text-white rounded-full " />
               </button>
            </div>

            <div className="absolute bottom-0 py-2 flex items-center justify-center w-full gap-x-1.5">
               {
                  slides.map((s, i) => {
                     return <div onClick={() => setCurrent(i)} key={i} className={`w-2.5 h-2.5 rounded-full cursor-pointer ${i === current ? 'bg-white' : 'bg-gray-400'}`}></div>
                  })
               }
            </div>


         </div>
      </div>
   );
};

export default Carousel1;