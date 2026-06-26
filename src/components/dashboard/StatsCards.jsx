const StatsCards = () => {
  const stats = [
    { title: "Courses", value: 0 },
    { title: "Completed", value: 0 },
    { title: "Certificates", value: 0 },
    { title: "Progress", value: "0%" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-5"
        >
          <h3 className="text-gray-500">{item.title}</h3>

          <p className="text-2xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;