import AnalyticsCharts from "./AnalyticsCharts";
import ManageCourses from "./ManageCourses";
import ManageUsers from "./ManageUsers";
import ManageBookings from "./ManageBookings";
import ManagePayments from "./ManagePayments";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid gap-6">
        <AnalyticsCharts />
        <ManageCourses />
        <ManageUsers />
        <ManageBookings />
        <ManagePayments />
      </div>
    </div>
  );
};

export default AdminDashboard;