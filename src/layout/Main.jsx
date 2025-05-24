import { Outlet } from "react-router-dom";
import Navbar from "../components/sheard/Navbar";
import Footer from "../components/sheard/Footer";


const Main = () => {
  return (
    <div className="font-sans antialiased  tetx-black  ">
      <Navbar/>

      <Outlet></Outlet>

      <Footer/>
    </div>
  );
};

export default Main;
