import styled from "@emotion/styled";
import React from "react";

const StyledButton = styled.button`
  border: none;
  background-color: orange;
  border-radius: 3px;
  color: white;
  padding: 10px;
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
