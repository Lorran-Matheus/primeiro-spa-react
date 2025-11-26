import React from "react";
import { IButton } from "./types";
import { ButtonContainer } from "./styles";

const Button = ({ title, variant = "primary", onClick, size }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} size={size}>
      <span>{title}</span>
      <span>{title}</span>
    </ButtonContainer>
  );
};

export { Button };
