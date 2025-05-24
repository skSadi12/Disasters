import React from "react";

function Dtls() {
  return (
    <div className="space-y-7 border-b-2 py-5 border-b-[#E4E4E7]">
      <div className="flex items-center gap-5">
        <img src="/location.png" alt="" className="size-[45px]" />
        <div>
          <p className="text-[14px] text-[#6B7280] ">Location</p>
          <h3 className="text-[20px] font-semibold ">
            Tulare County, Los Angles, CA 23415
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img src="/Approx.png" alt="" className="size-[45px]" />
        <div>
          <p className="text-[14px] text-[#6B7280] ">Approx. Cost:</p>
          <h3 className="text-[20px] font-semibold ">$60,607,456.00</h3>
        </div>
      </div>
    </div>
  );
}

export default Dtls;
