import styled from "styled-components";
import { FeedStyled } from "./types";

export const Container = styled.main`
  width: 100vw;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
  }
`;

export const Title = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 3rem;
  line-height: 25px;
  margin-bottom: 24px;
  color: #ffffff;
`;

export const TitleHightlight = styled.h3`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 25px;
  color: #ffffff70;
  margin-bottom: 24px;
`;

export const Column = styled.div<FeedStyled>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;
