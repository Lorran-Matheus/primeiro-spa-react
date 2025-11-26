import styled, { css } from "styled-components";
import { ButtonStyled } from "./types";

export const ButtonContainer = styled.button<ButtonStyled>`
  color: #ffff;
  padding: 2px 12px;
  max-width: 100%;
  width: 8rem;
  height: 2rem;
  font-size: 0.9rem;
  background-color: #565656;
  border-radius: 1.3rem;
  border: none;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #bbbbbbff;
    color: #000;
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    transition: transform 0.4s ease;
  }

  span:first-child {
    transform: translateX(0);
  }

  span:last-child {
    transform: translateX(-100%);
  }

  &:hover span:first-child {
    transform: translateX(100%);
  }

  &:hover span:last-child {
    transform: translateX(0);
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 10.4rem;
      width: 100%;
      background: #e20c5aff;

      &:hover {
        background-color: #b81450ff;
        color: #ffffff;
      }
    `}

  ${({ size }) =>
    `
      max-width: ${size}rem;
    `}
`;
