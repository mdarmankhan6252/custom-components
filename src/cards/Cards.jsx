import { Link } from "react-router-dom";
import Card1 from "./Card1";

const Cards = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-12">

         {/* card - 1 */}
         <div>
            <div className=" font-serif flex items-end space-x-4 pb-3">
               <h1 className="text-3xl">Card - 1 : </h1>
               <Link target="_blank" to='https://github.com/mdarmankhan6252/custom-components/blob/main/src/carousels/Carousel.jsx' className="text-blue-500 hover:underline text-xl">Get Code</Link>
            </div>
            <Card1 />
         </div>
      </div>
   );
};

export default Cards;