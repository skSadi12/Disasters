import React from "react";

function SemiCard( {p,x}) {
  return (
    <div className="space-y-5 border-b-2 py-5 border-b-[#E4E4E7]">
      <div className="flex justify-between ">
        <h3 className="font-bold ">{p}</h3>
        <button className="underline">See all</button>
      </div>
      <div className="flex bg-[#F4F4F5] rounded-xl gap-5 p-4">
        <img src="/build.png" className="size-[78px] rounded-xl" alt="" />
        <div className="space-y-1 flex flex-col justify-center">
          <p className="font-semibold">{x} name</p>
          <p className="text-[#71717A] text-[14px]">
            Location name • 16.12212, -122.1424{" "}
          </p>
          <p className="font-semibold">$1,456,654.00</p>
        </div>
      </div>
      <div className="flex bg-[#F4F4F5] rounded-xl gap-5 p-4">
        <img src="/build.png" className="size-[78px] rounded-xl" alt="" />
        <div className="space-y-1 flex flex-col justify-center">
          <p className="font-semibold">{x} name</p>
          <p className="text-[#71717A] text-[14px]">
            Location name • 16.12212, -122.1424{" "}
          </p>
          <p className="font-semibold">$1,456,654.00</p>
        </div>
      </div>
    </div>
  );
}

export default SemiCard;
