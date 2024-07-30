import React from "react";

function ReviewCard({ reviewer, rating, comment }) {
  return (
    <div className="card">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{reviewer}</div>
        <div className="mb-2 text-yellow-500">
          {"★".repeat(rating) + "☆".repeat(5 - rating)}
        </div>
        <p className="text-gray-700">{comment}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
