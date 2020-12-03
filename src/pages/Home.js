import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Im the home page: Go to <Link to="/about-us">about us page</Link>
    </div>
  );
}

export default Home;
