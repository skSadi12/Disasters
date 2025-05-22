import { Outlet } from "react-router-dom";
import Navbar from "../components/sheard/Navbar";


const Main = () => {
  return (
    <div className="font-sans antialiased  tetx-black  ">
      
      <Navbar/>

      <Outlet></Outlet>

      
    </div>
  );
};

export default Main;
