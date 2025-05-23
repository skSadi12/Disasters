import React from "react";
import OrBtn from "../components/sheard/OrBtn"

function Md() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="   p-2 rounded-full fixed 
          bottom-[7rem] right-4 cursor-pointer md:right-8"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <img src="/chat.png" alt="" />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-white btn-sm btn-circle btn-ghost absolute right-8 top-8">
              ✕
            </button>
          </form>
          <div className="min-h-[600px] min-w-[250px] w-full">
            <div  className="bg-white">
              <h4 className="p-5 bg-[#F26922] rounded-t-xl">Chat with Cypher </h4>
              <div className="bg-[#3F3F46] text-white mt-5 py-4 text-end max-w-[210px] md:max-w-[300px] pr-5 rounded-xl absolute right-[24px] ">
              <p >Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
              <div className="bg-white border-2 border-gray-400 text-balck mt-30 py-4  max-w-[210px] md:max-w-[300px] px-2 rounded-xl m right-[24px] ">
              <p >Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
              <div className="bg-white border-2 border-gray-400 text-balck mt-5 py-4  max-w-[210px] md:max-w-[300px] px-2 rounded-xl m right-[24px] ">
              <p >Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
            <div className="bg-[#3F3F46] text-white mt-5 py-4 text-end max-w-[210px] md:max-w-[300px] pr-5 rounded-xl absolute right-[24px] top-[390px]">
              <p >Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
            <div>
              <input type="text" className="w-full border-2 py-3 px-2 mt-28 border-gray-400 rounded-xl"  placeholder="Enter your question..."/>
            </div>
              <div className="flex justify-between mt-5 items-center">
                <div className=" flex gap-2">
                  <img src="/camera.png" alt="" />
                <img src="/photo.png" alt="" />
                <img src="./attacment.png" alt="" />
                </div>
                <div>
                  <OrBtn>Send</OrBtn>
                </div>

              </div>

            </div>
            
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Md;
