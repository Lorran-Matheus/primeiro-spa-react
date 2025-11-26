import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    img {
      box-shadow: 15px 15px 15px #171225ff;
      width: 45rem;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', "Arial";
  font-weight: 700;
  font-size: 2rem;
  width: 20rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;

  color: #ffffff;
`;

export const TitleHightlight = styled.span`
  color: #e4105d;
`;

export const TextContent = styled.p`
  font-family: 'Roboto', "Arial";
  font-weight: 400;
  font-size: 1.2rem;
  width: 26.25rem;
  margin-bottom: 1.25rem;
  line-height: 1.3rem;

  color: #ffffff;
`;
