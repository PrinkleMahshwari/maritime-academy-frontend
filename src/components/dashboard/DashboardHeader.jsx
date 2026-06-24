const DashboardHeader = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h1 className="text-3xl font-bold">
        Welcome Back, {user?.name || "Student"}
      </h1>

      <p className="text-gray-600 mt-2">
        Track your courses and certifications.
      </p>
    </div>
  );
};

export default DashboardHeader;