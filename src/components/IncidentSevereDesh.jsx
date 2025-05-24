import React from "react";
import Search from "./sheard/Search";
import OrBtn from "./sheard/OrBtn";
import { Link } from "react-router-dom";
import CustomizedProgressBars from "./sheard/Prog";

function IncidentSevereDesh() {
  return (
    <section className="bg-[#E4E4E7]  py-4">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-1 flex justify-between gap-10 flex-col sm:flex-row">
        <div className="md:text-start text-center">
          <p className="text-[12px] text-[#71717A]  ">
            Incidents - DR-4699 March 2023 Severe Storms
          </p>
          <div className="flex items-center gap-5">
            <img src="/Incident13.png" alt="" />
            <h2 className="text-[26px] font-bold ">DR-4699 March 2023 Severe Storms</h2>
          </div>
        </div>

        <div className='flex items-center gap-3 flex-col lg:flex-row'>
                <Search/> 
                <div className='flex bg-white rounded-[5px]   p-1'>
                      
                    <input type="text" placeholder='Sort By: Date modified' className='outline-0'/>
                </div>
                <OrBtn>
                    <Link to="">+  New Location</Link>
                </OrBtn>
            </div>
      </div>
      
    </section>
  );
}

export default IncidentSevereDesh;
