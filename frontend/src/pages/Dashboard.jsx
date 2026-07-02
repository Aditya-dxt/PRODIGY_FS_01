import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="video-page">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/dashboard-bg.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />

      <div className="dashboard-wrapper">
        <div className="glass-card">
          <h1 className="glass-title">Welcome, {user?.name} 👋</h1>
          <p className="glass-subtitle">
            You've successfully reached a protected route — this page is only visible to
            authenticated users.
          </p>

          <div className="glass-info-box">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Role:</strong> {user?.role}
            </p>
          </div>

          <button onClick={handleLogout} className="submit-btn">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;