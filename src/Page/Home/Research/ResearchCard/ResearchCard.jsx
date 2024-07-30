import React from "react";
import { Link } from "react-router-dom";

const ResearchCard = ({ item }) => {
  const { title, link, publicationDate, keywords, conference, authors } = item;
  return (
    <div className="w-full shadow-xl card bg-base-300">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="space-x-1 ">
          <span className="font-bold text-md">KeyWords:</span>
          {keywords?.map((item, index) => {
            return (
              <span className="text-sm" key={index}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {index !== keywords.length - 1 && ","}
              </span>
            );
          })}
        </div>
        <div className="space-x-1 ">
          <span className="font-bold text-md">Researched By:</span>
          {authors?.map((item, index) => {
            return (
              <span className="text-sm " key={index}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                {index !== keywords.length - 1 && ","}
              </span>
            );
          })}
        </div>
        <div className="justify-end card-actions">
          <Link target="_" to={link} className="btn btn-info">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
