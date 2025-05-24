import React from "react";
import Card from "./sheard/Card";
import SemiCard from "./sheard/SemiCard";
import Dtls from "./sheard/Dtls";
import Mapx from "./sheard/Mapx";

function IncidentSevereBody() {
  return (
    <section className="max-w-[1400px] px-5 lg:px-3 mx-auto my-10 flex flex-col gap-10 lg:flex-row ">
      <div className="w-full lg:w-[55%]">
        <Dtls/>
        <div className="space-y-3 border-b-2 py-5 border-b-[#E4E4E7]">
          <p className="text-[14px] font-bold  ">Description</p>
          <p className="text-[16px] text-[#71717A]  ">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
            general sac mascho werhoLorem ipsum dolar sit general sac mascho
            werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
            sit general sac mascho werhoLorem ipsum dolar sit general sac mascho
            werho
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5  border-b-2 py-5 border-b-[#E4E4E7]">
          <Card
            image={"/build1.png"}
            p1={"Whitechapel Rd ."}
            p2={"Tulare County,  Los Angles, CA 23415"}
            p3={"$1,456,654.00"}
          />
          <Card
            image={"/build2.png"}
            p1={"Whitechapel Rd ."}
            p2={"Tulare County,  Los Angles, CA 23415"}
            p3={"$1,456,654.00"}
          />
          <Card
            image={"/build1.png"}
            p1={"Whitechapel Rd ."}
            p2={"Tulare County,  Los Angles, CA 23415"}
            p3={"$1,456,654.00"}
          />
          <Card
            image={"/build1.png"}
            p1={"Whitechapel Rd ."}
            p2={"Tulare County,  Los Angles, CA 23415"}
            p3={"$1,456,654.00"}
          />
        </div>
        <SemiCard p={"Activities"} x={'Activity'}/>
        <SemiCard p={"Documents"} x={'Document'}/>
      </div>
      <div className="w-full lg:w-[45%]">
        <Mapx/>
      </div>
    </section>
  );
}

export default IncidentSevereBody;
