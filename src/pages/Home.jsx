import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "80px",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>HireHub</h1>

      <p style={{ fontSize: "1.4rem", marginTop: "10px" }}>
        Find Your Dream Job Today
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/jobs">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Browse Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}