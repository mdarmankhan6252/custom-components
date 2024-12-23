import { Link, NavLink } from "react-router-dom";


const Nav = () => {
   return (
      <div>
         <h1 className="text-4xl font-semibold text-center text-amber-500 py-10">My All Custom Components</h1>
         <ul className="px-4 *:p-2 *:border-2 *:border-amber-500 pt-4 pb-10 font-semibold *:text-amber-600 space-x-4 space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/carousel">Carousel</NavLink>
            <NavLink to="/buttons">Buttons</NavLink>
            <NavLink to="/cards">Cards</NavLink>
         </ul>
         
      </div>
   );
};

export default Nav;