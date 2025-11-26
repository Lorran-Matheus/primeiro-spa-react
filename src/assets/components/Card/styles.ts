import styled from "styled-components";
import { CardStyled } from "./types";

export const CardContainer = styled.div`
  width: 80%;
  height: 26rem;
  max-height: 100vh;
  background-color: #2b4651;
  position: relative;
  margin-bottom: 1.5rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .6rem;
  `;

export const ImageBackground = styled.img<CardStyled>`
  width: 100%;
  height: 13rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.75rem;

  div {
    margin-left: 0.75rem;
  }

  h4 {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.56rem;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #ffffff;
  }
`;

export const UserPicture = styled.img<CardStyled>`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 3rem;
  border: 2px solid #ffffff;
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
    a {
      text-decoration: none;
      color: #aacfffff;
    }
  }
`;

export const HasInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  gap: .7rem;

  h4 {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #22aeffff;
  }

  p {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.35rem;
  }
`;
