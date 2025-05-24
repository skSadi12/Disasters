import React from "react";
import Search from "./sheard/Search";

function InsMap() {
  return (
    <section className="max-w-[750px] mx-auto px-5 my-10 space-y-5">
      <h1 className="text-[24px] font-semibold">Where’s the incident?</h1>
      <p className="text-[14px] ">
        Enter a GPS, address. or pin point on the map. Try to be as accurate as
        possible, or click:Jurisdiction Wide
      </p>
      <div className=" bg-[url(/map.png)] bg-no-repeat h-[490px] p-4 relative ">
        <div className="flex bg-white rounded-[5px] items-center gap-2 max-w-[250px] p-1">
          <img src="/search.png" className="max-w-8 max-h-8  " alt="" />
          <input
            type="text"
            placeholder="Enter incident address or GPS"
            className="outline-0"
          />
        </div>
        <div className="flex bg-white mt-4 rounded-[5px] items-center gap-2 max-w-[250px] p-1">
          <img src="/search.png" className="max-w-8 max-h-8  " alt="" />
          <input
            type="text"
            placeholder="Pinpoint damage"
            className="outline-0"
          />
        </div>
        <div className="absolute top-40 right-22"><img src="/orLoc.png" className="size-10" alt="" /></div>
      </div>
    </section>
  );
}

export default InsMap;
