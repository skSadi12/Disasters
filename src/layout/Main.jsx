import { Outlet } from "react-router-dom";


const Main = () => {
  return (
    <div className="font-sans antialiased  tetx-black  ">
      

      <Outlet></Outlet>

      
    </div>
  );
};

export default Main;
