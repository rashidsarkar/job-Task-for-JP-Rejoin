import "./CollegeCard.css";
function CollegeCard({
  image,
  name,
  admissionDates,
  events,
  researchHistory,
  sports,
}) {
  return (
    <div className="card">
      <img className="w-full h-48" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-gray-700">
          <strong>Admission Dates:</strong> {admissionDates}
        </p>
        <p className="text-gray-700">
          <strong>Events:</strong> {events}
        </p>
        <p className="text-gray-700">
          <strong>Research History:</strong> {researchHistory}
        </p>
        <p className="text-gray-700">
          <strong>Sports:</strong> {sports}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #CollegeLife
        </span>
        <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #Education
        </span>
        <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #Sports
        </span>
        <button className="px-4 py-2 mt-4 btn btn-info">Details</button>
      </div>
    </div>
  );
}
export default CollegeCard;
