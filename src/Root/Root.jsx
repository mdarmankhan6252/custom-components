import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Root = () => {
   return (
      <div className="max-w-7xl px-3 mx-auto">
         <Nav />
         <Outlet />

      </div>
   );
};

export default Root;