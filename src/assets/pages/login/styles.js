import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 10vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .thumb {
  
    padding: 0 0 1rem 0;
    display: flex;
    justify-content: flex-start;
    gap: 0 4rem;

    img {
      width: 100%;
      max-width: 23rem;
    }
  }

  .thumb2 {
    height: 14rem;
    display: flex;
    justify-content: flex-start;
    gap: 0 4rem;

    img {
      width: 100%;
      max-width: 23rem;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 2rem;
  width: 30vw;
  max-width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  form {
    width: 100%;
  }
`;

export const Column = styled.div`
  padding: 0.5rem;
  max-width: 45vw;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.4rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Arial", "Roboto";
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.75rem;
  color: #ffffff;

  ${({ width = 20 }) => width && `width: ${width}vw;`}
`;

export const TitleHightlight = styled.span`
  font-family: "Open Sans", "Arial";
  font-size: 2.2rem;
  color: #e4105d;
`;

export const TitleLogin = styled.p`
  font-family: "Arial", "Roboto";
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;
`;

export const SubtitleLogin = styled.p`
  font-family: "Arial", "Roboto";
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 2.1rem;
  line-height: 1.5rem;
`;

export const ForgetText = styled.p`
  font-family: "Roboto", "Arial";
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.1rem;
  color: #e5e044;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CreateText = styled.p`
  font-family: "Roboto", "Arial";
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.1rem;
  color: #e23dd7;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

