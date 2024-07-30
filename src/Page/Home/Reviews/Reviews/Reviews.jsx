import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

function Reviews() {
  const reviews = [
    {
      reviewer: "John Doe",
      rating: 5,
      comment: "Excellent college with great facilities and faculty.",
    },
    {
      reviewer: "Jane Smith",
      rating: 4,
      comment:
        "Great experience, but could improve on the administrative side.",
    },
    {
      reviewer: "Jane Smith",
      rating: 4,
      comment:
        "Great experience, but could improve on the administrative side.",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="p-4">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Students Reviews
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
