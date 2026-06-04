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
    return <h1>Job Not Found</h1>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{job.title}</h1>

      <h2>{job.company}</h2>

      <p>Location: {job.location}</p>

      <p>Type: {job.type}</p>

      <p>{job.description}</p>

      <button
        style={{
          padding: "12px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>

      <button
        onClick={saveJob}
        style={{
          padding: "12px",
          cursor: "pointer",
        }}
      >
        {saved ? "Saved" : "Save Job"}
      </button>
    </div>
  );
}