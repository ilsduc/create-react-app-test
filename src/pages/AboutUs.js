import React, { useState } from "react";
import Button from "../components/Button";

function AboutUs() {
  const [cpt, setCpt] = useState(0);

  const incrementCpt = () => {
    setCpt(cpt + 1);
  };

  return (
    <div>
      <p>
        <Button onClick={incrementCpt}>Increment cpt</Button>
      </p>
      <p>cpt: {cpt}</p>
    </div>
  );
}

export default AboutUs;
