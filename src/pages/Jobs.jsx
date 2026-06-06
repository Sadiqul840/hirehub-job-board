import { useState } from "react";
import { jobs } from "../data/jobs";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location)
  );

  return (
    <div
      style={{
        padding: "50px 20px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Available Jobs
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "40px",
        }}
      >
        {filteredJobs.length} Jobs Found
      </p>

      {/* Search & Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "14px",
            width: "320px",
            borderRadius: "10px",
            border: "1px solid #334155",
            background: "#111827",
            color: "white",
            fontSize: "16px",
          }}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #334155",
            background: "#111827",
            color: "white",
            fontSize: "16px",
          }}
        >
          <option value="">All Locations</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      {/* Job Cards */}
      {filteredJobs.map((job) => (
        <div
          key={job.id}
          style={{
            background: "rgba(17,24,39,0.9)",
            border: "1px solid #1e293b",
            padding: "25px",
            borderRadius: "18px",
            marginBottom: "25px",
            boxShadow: "0 0 20px rgba(37,99,235,0.15)",
            transition: "0.3s",
          }}
        >
          <h2
            style={{
              marginBottom: "15px",
              color: "white",
            }}
          >
            {job.title}
          </h2>

          <p style={{ marginBottom: "8px" }}>
            🏢 <strong>{job.company}</strong>
          </p>

          <p style={{ marginBottom: "8px" }}>
            📍 {job.location}
          </p>

          <p style={{ marginBottom: "15px" }}>
            💼 {job.type}
          </p>

          <Link to={`/job/${job.id}`}>
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              View Details →
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}