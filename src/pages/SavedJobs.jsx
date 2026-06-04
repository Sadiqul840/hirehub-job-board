export default function SavedJobs() {
  const savedJob = JSON.parse(localStorage.getItem("savedJob"));

  return (
    <div style={{ padding: "40px" }}>
      <h1>Saved Jobs</h1>

      {savedJob ? (
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>{savedJob.title}</h2>
          <p>{savedJob.company}</p>
          <p>{savedJob.location}</p>
          <p>{savedJob.type}</p>
        </div>
      ) : (
        <p>No saved jobs found.</p>
      )}
    </div>
  );
}