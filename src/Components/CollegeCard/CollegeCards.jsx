import React from "react";
import CollegeCard from "./CollegeCard/CollegeCard";

function CollegeCards() {
  const colleges = [
    {
      image: "https://i.ibb.co/jTxsNFw/photo-1666243035395-9b7853cecc05.jpg",
      name: "University of Example",
      admissionDates: "June 1 - August 31",
      events: "Science Fair, Music Festival",
      researchHistory: "Pioneering AI research",
      sports: "Football, Basketball",
    },
    {
      image: "https://i.ibb.co/jTxsNFw/photo-1666243035395-9b7853cecc05.jpg",
      name: "Institute of Sample",
      admissionDates: "July 1 - September 30",
      events: "Tech Summit, Art Expo",
      researchHistory: "Breakthroughs in Quantum Computing",
      sports: "Soccer, Tennis",
    },
    {
      image: "https://i.ibb.co/jTxsNFw/photo-1666243035395-9b7853cecc05.jpg",
      name: "Institute of Sample",
      admissionDates: "July 1 - September 30",
      events: "Tech Summit, Art Expo",
      researchHistory: "Breakthroughs in Quantum Computing",
      sports: "Soccer, Tennis",
    },
    // Add more colleges as needed
  ];

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {colleges.map((college, index) => (
        <CollegeCard key={index} {...college} />
      ))}
    </div>
  );
}

export default CollegeCards;
