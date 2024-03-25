import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navber from "./Navber";


const Root = () => {
    return (
        <div>
         <div className="h-16">
         <Navber></Navber>
         </div> 

       <div className="min-h-[calc(100vh-116px)]">
       <Outlet></Outlet>
       </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;