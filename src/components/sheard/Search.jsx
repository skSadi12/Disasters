import React from "react";

function Search() {
  return (
    <div className="flex bg-white rounded-[5px] items-center gap-2 max-w-[200px] p-1">
      <img src="/search.png" className="max-w-8 max-h-8  " alt="" />
      <input type="text" placeholder="Search incident" className="outline-0" />
    </div>
  );
}

export default Search;
