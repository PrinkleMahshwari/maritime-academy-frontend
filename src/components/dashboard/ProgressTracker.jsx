const ProgressTracker = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        Progress Tracker
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-cyan-500 h-4 rounded-full"
          style={{ width: "60%" }}
        />
      </div>

      <p className="mt-2">60% Completed</p>
    </div>
  );
};

export default ProgressTracker;