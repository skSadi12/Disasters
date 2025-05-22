import React from "react";

function OrBtn({children}) {
  return (
    <button className="bg-[#F26922] px-3 py-1 text-white hover:bg-black transition-all duration-300 rounded-[5px]">
      {children}
    </button>
  );
}

export default OrBtn;
