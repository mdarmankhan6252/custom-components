import { Link } from "react-router-dom";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import Carousel4 from "./Carousel4";


const Carousel = () => {
   return (
      <div>
         {/* carousel - 1 */}
         <div className=" font-serif flex items-end space-x-4">
            <h1 className="text-5xl">Carousal - 1 : </h1>
            <Link target="_blank" to='https://github.com/mdarmankhan6252/custom-components/blob/main/src/carousels/Carousel.jsx' className="text-blue-500 hover:underline text-2xl">Get Code</Link>
         </div>
         <Carousel1 />

         {/* carousel - 2 */}
         <div className=" font-serif flex items-end space-x-4 pb-6">
            <h1 className="text-5xl">Carousal - 2 : </h1>
            <Link target="_blank" to='https://github.com/mdarmankhan6252/custom-components/blob/main/src/carousels/Carousel2.jsx' className="text-blue-500 hover:underline text-2xl">Get Code</Link>
         </div>
         <Carousel2 />

         {/* carousel - 3 */}
         <div className=" font-serif flex items-end space-x-4 pt-20 pb-6">
            <h1 className="text-5xl">Carousal - 3 : </h1>
            <Link target="_blank" to='https://github.com/mdarmankhan6252/custom-components/blob/main/src/carousels/Carousel3.jsx' className="text-blue-500 hover:underline text-2xl">Get Code</Link>
         </div>
         <Carousel3 />

         {/* carousel - 4 */}
         <div className=" font-serif flex items-end space-x-4 pt-20 pb-6">
            <h1 className="text-5xl">Carousal - 4 : </h1>
            <Link target="_blank" to='https://github.com/mdarmankhan6252/custom-components/blob/main/src/carousels/Carousel4.jsx' className="text-blue-500 hover:underline text-2xl">Get Code</Link>
         </div>
         <Carousel4 />


      </div>
   );
};

export default Carousel;