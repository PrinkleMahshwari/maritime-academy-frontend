import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import ProgressTracker from "./ProgressTracker";
import Certificates from "./Certificates";

const StudentDashboard = () => {
  return (
    <div className="p-6">
      <DashboardHeader />

      <StatsCards />

      <ProgressTracker />

      <Certificates />
    </div>
  );
};

export default StudentDashboard;