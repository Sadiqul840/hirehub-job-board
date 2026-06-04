import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid gray",
      }}
    >
      <h2>HireHub</h2>

      <div>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/jobs" style={{ marginRight: "20px" }}>
          Jobs
        </Link>

        <Link to="/saved">
          Saved Jobs
        </Link>
      </div>
    </nav>
  );
}