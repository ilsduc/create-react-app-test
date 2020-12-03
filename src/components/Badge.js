import React from "react";

function Badge({ age, children }) {
  return (
    <div style={{ border: "1px solid green", margin: "16px" }}>
      {age >= 18 ? "Majeur" : "Mineur"}
      {children}
    </div>
  );
}

export default Badge;
