import styled from "styled-components";
import { UserProgress } from "./types";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;

  display: flex;
  justify-content: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
`;

export const UserPicture = styled.img`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 3rem;
  border: 2px solid #ffffff;
`;

export const NameText = styled.div`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const Progress = styled.div<UserProgress>`
  width: 11.25rem;
  max-width: 100%;
  height: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 6px;
    border-radius: 3px 0 3px 0;
    background-color: #0089b3ff;
  }
`;

export const PostInfo = styled.div`
  margin-bottom: 1.1rem;

  h4 {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.56rem;
  }

  p {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export const HasInfo = styled.div`
  margin-top: 0.75rem;

  h4 {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.35rem;
  }
`;
