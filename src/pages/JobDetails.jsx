import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { useState } from "react";

export default function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((j) => j.id === Number(id));

  const [saved, setSaved] = useState(false);

  const saveJob = () => {
    localStorage.setItem("savedJob", JSON.stringify(job));
    setSaved(true);
  };

  if (!job) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Job Not Found</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "60px",
        maxWidth: "800px",
        margin: "50px auto",
        background: "#111827",
        borderRadius: "16px",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        {job.title}
      </h1>

      <h2
        style={{
          color: "#3b82f6",
          marginBottom: "20px",
        }}
      >
        {job.company}
      </h2>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        📍 Location: {job.location}
      </p>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "20px",
        }}
      >
        💼 Type: {job.type}
      </p>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "30px",
        }}
      >
        {job.description}
      </p>

      <button
        style={{
          padding: "12px 25px",
          borderRadius: "8px",
          color: "white",
          fontSize: "16px",
          background: "#22c55e",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>

      <button
        onClick={saveJob}
        style={{
          padding: "12px 25px",
          borderRadius: "8px",
          color: "white",
          fontSize: "16px",
          background: "#f59e0b",
          cursor: "pointer",
        }}
      >
        {saved ? "Saved ✓" : "Save Job"}
      </button>
    </div>
  );
}