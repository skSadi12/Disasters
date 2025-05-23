import React from "react";
import Section from "./sheard/Section";
import Card from "./sheard/Card";

function Cards() {
  return (
    <Section>
      <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto my-10 justify-center  md:grid-cols-3 lg:grid-cols-4 gap-10 items-center 
      "> 
        <Card
          image={"/card1.png"}
          p1={"Whitechapel Rd ."}
          p2={"Tulare County,  Los Angles, CA 23415"}
          p3={"$1,456,654.00"}
        />
        <Card
          image={"/card2.png"}
          p1={"Whitechapel Rd ."}
          p2={"Tulare County,  Los Angles, CA 23415"}
          p3={"$1,456,654.00"}
        />
        <Card
          image={"/card3.png"}
          p1={"Tulare County"}
          p2={"Tulare County,  Los Angles, CA 23415"}
          p3={"$1,456,654.00"}
        />
        <Card
          image={"/card4.png"}
          p1={"Tulare County"}
          p2={"Tulare County,  Los Angles, CA 23415"}
          p3={"$1,456,654.00"}
        />
        <Card
          image={"/card5.png"}
          p1={"Tulare County"}
          p2={"Tulare County,  Los Angles, CA 23415"}
          p3={"$1,456,654.00"}
        />
        <Card
          image={"/card6.png"}
          p1={"Tulare County"}
          p2={"Tulare County,  Los Angles, CA 23415"}
          p3={"$1,456,654.00"}
        />
        
      </div>
    </Section>
  );
}

export default Cards;
