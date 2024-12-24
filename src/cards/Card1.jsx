const Card1 = () => {
   return (
      <div className="space-y-3 border rounded-lg">
         <div className="space-y-2">
            <img src="https://images.pexels.com/photos/11288126/pexels-photo-11288126.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="flex items-center text-xs px-3">
               <span>12/05/2025</span>
            </div>
         </div>
         <div className="space-y-2 px-3 pb-3">
            <h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
            <p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
            <button className="text-sm font-semibold  bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl">Buy Now</button>
         </div>
         
      </div>
   );
};

export default Card1;