import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 9vh;
  font-family: "Roboto", "Arial", "sans-serif";

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
`;

export const Column = styled.div`
  width: 100%;
  max-width: 50%;
  padding: 1rem;
`;
export const Title = styled.div`
  color: #e4105d;
  font-size: 3rem;
  padding-bottom: 0.8rem;
`;
export const Paragraph = styled.div`
  font-size: 1.8rem;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 35%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    input {
      padding: 0.8rem;
    }
  }

  .text-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    .check-container {
      padding-bottom: 0.8rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      input {
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1rem;
        font-weight: normal;
      }
    }

    p {
      font-size: 0.9rem;

      a {
        padding-left: 0.4rem;
        color: #e5e044;

        &:visited {
          color: #0066ffff;
        }
        &:active, &:hover{
        color: #ffbb00ff;
        }
      }
    }
  }
`;
