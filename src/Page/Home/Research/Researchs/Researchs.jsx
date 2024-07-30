import React, { useEffect, useState } from "react";
import ResearchCard from "../ResearchCard/ResearchCard";

const Research = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    fetch("research.json")
      .then((res) => res.json())
      .then((data) => setResearch(data));
  }, []);

  return (
    <>
      <div className="relative flex justify-center pt-5 pb-2 text-2xl md:pb-0 md:text-4xl">
        <p className="relative inline-block">
          Research and Analysis
          <span className="absolute bottom-[-5px] left-0 right-0 h-1 gradient-container"></span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 my-10 md:grid-cols-3">
        {research.map((item, index) => {
          return <ResearchCard key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Research;
