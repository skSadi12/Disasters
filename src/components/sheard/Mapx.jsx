import React from "react";


function Mapx() {
  return (
    <section className="max-w-[750px] mx-auto  my-10 space-y-5">
      
      <p className="text-[14px] text-[#71717A] ">
        Incident Map
      </p>
      <div className=" bg-[url(/map.png)] bg-no-repeat h-[490px]  relative ">
        <div className="absolute top-40 right-22"><img src="/orLoc.png" className="size-10" alt="" /></div>
        <div className="absolute top-70 right-37"><img src="/orLoc.png" className="size-10" alt="" /></div>
        <div className="absolute top-90 right-62"><img src="/orLoc.png" className="size-10" alt="" /></div>
        <div className="absolute top-20 right-59"><img src="/orLoc.png" className="size-10" alt="" /></div>
        <div className="absolute top-80 right-22"><img src="/orLoc.png" className="size-10" alt="" /></div>
      </div>
      <p className="text-[14px] text-[#71717A] ">
        Start 19.1232, -118.233     End 19.3245, -119.2323
      </p>
    </section>
  );
}

export default Mapx;
