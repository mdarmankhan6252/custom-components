import { useEffect, useState } from "react";

const Carousel4 = () => {
   const [currentSlider, setCurrentSlider] = useState(0);
   const sliders = [{img: "https://i.ibb.co.com/x5twcnG/01.jpg", title: "slide - 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}, {img: "https://i.ibb.co.com/V2c8mpG/02.jpg", title: "slide - 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."},{img: "https://i.ibb.co.com/8x45hfv/03.png", title: "slide - 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."},{img: "https://i.ibb.co.com/Nr1x9VN/04.jpg", title: "slide - 4", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement."}];
   // if you don't want to change the slider automatically then you can just remove the useEffect
   useEffect(() => {
      const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
      return () => clearInterval(intervalId);
   }, [currentSlider]);

   return (
      <>
         <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
            style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
            {/* text container here */}
            <div className="drop-shadow-lg text-white text-center px-5">
               <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
               <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
            </div>
         </div>
         {/* slider container */}
         <div className="flex justify-center items-center gap-3 p-2">
            {/* sliders */}
            {sliders.map((slide, inx) => (
               <img onClick={() => setCurrentSlider(inx)} key={inx}
                  src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                  alt={slide.title} />
            ))}
         </div>
      </>
   )
};

export default Carousel4;