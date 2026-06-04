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
    <div style={{ padding: "40px" }}>
      <h1>Available Jobs</h1>

      {/* Search + Filter */}

      {filteredJobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.type}</p>

          <Link to={`/job/${job.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}