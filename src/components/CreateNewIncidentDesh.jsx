import React from 'react'
import OrBtn from "./sheard/OrBtn";
import { Link } from "react-router-dom";
import CustomizedProgressBars from './sheard/Prog';

function CreateNewIncidentDesh() {
  return (
    <section className="bg-[#E4E4E7] px-5 py-4">
      <div className="max-w-[1400px] mx-auto px-5 flex justify-between gap-10 flex-col sm:flex-row">
        <div className="flex items-center">
          <div>
            <button>
              <Link to='/incidents'>
                <img src="/x.png" className="size-16" alt="" />
              </Link>
            </button>
          </div>
          <div className="md:text-start text-center">
            <p className="text-[12px] text-[#71717A]  ">
              Home - Incidents - New Incident
            </p>
            <h2 className="text-[26px] ">New Incident</h2>
          </div>
        </div>
        <div>
            <CustomizedProgressBars children={50}/>
        </div>
        <div className="flex items-center gap-8 flex-col md:flex-row">
          <button className="bg-white px-8 py-1 hover:text-white hover:bg-[#F26922] transition-all duration-300 rounded-[5px]">
            <Link to="/incidents/progress/NewIncident">Back</Link>
          </button>
          <OrBtn>
            <Link to="">Next step</Link>
          </OrBtn>
        </div>
      </div>
    </section>
  )
}

export default CreateNewIncidentDesh
