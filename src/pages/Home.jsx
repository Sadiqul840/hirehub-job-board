import { Link } from "react-router-dom";

export default function Home() {
  const cardStyle = {
    background: "#111827",
    padding: "25px",
    borderRadius: "15px",
    width: "220px",
    boxShadow: "0 0 15px rgba(59,130,246,0.2)",
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "120px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          marginBottom: "20px",
          textShadow: "0 0 25px rgba(59,130,246,0.5)",
        }}
      >
        Find Your Dream Job
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#94a3b8",
          marginBottom: "40px",
        }}
      >
        Explore opportunities from top companies
      </p>

      <Link to="/jobs">
        <button
          style={{
            background: "#2563eb",
            color: "white",
            padding: "15px 35px",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Browse Jobs
        </button>
      </Link>

      {/* Stats Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "80px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ color: "#3b82f6" }}>500+</h2>
          <p>Jobs Available</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#3b82f6" }}>120+</h2>
          <p>Companies</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#3b82f6" }}>1000+</h2>
          <p>Candidates</p>
        </div>
      </div>
    </div>
  );
}