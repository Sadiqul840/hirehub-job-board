import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#111827",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <h2
        style={{
          color: "#3b82f6",
          fontSize: "30px",
        }}
      >
        HireHub
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "18px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/saved">Saved Jobs</Link>
      </div>
    </nav>
  );
}