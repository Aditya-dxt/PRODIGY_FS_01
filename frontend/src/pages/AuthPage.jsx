import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (mode === "login") {
        await login(form.email, form.password);
      } else {
        await register(form.name, form.email, form.password);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="video-page">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/auth-bg.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />

      <div className="auth-wrapper">
        <div className="glass-card">
          <div className="mode-toggle">
            <button
              className={mode === "login" ? "toggle-btn active" : "toggle-btn"}
              onClick={() => switchMode("login")}
              type="button"
            >
              Log In
            </button>
            <button
              className={mode === "signup" ? "toggle-btn active" : "toggle-btn"}
              onClick={() => switchMode("signup")}
              type="button"
            >
              Sign Up
            </button>
          </div>

          <h1 className="glass-title">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="glass-subtitle">
            {mode === "login"
              ? "Log in to access your protected dashboard"
              : "Sign up to get started"}
          </p>

          {error && <p className="error-text">{error}</p>}

          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="field-group">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} required />
              </div>
            )}

            <div className="field-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-group">
              <label>Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowPassword((s) => !s)}
                  tabIndex={-1}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting
                ? mode === "login"
                  ? "Logging in..."
                  : "Creating account..."
                : mode === "login"
                ? "Log In"
                : "Sign Up"}
            </button>
          </form>

          <p className="switch-text">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <span
              className="switch-link"
              onClick={() => switchMode(mode === "login" ? "signup" : "login")}
            >
              {mode === "login" ? "Sign up" : "Log in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;