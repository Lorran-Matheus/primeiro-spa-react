import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 3.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  gap: ;

  img {
    max-width: 2.3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 3.4rem;
  font-family: "Roboto", "Arial", "sans-serif";

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuscarInputContainer = styled.div`
  width: 17rem;
  height: 2.2rem;
  background: #2d2d37;
  border-radius: 0.8rem;
  padding: 2px 1rem;
  margin: 0.1rem 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    background-color: #3b3450;
    border-radius: 0.8rem;
  }
`;

export const Menu = styled.div`
  max-width: 100%;
  font-size: .75rem
  line-height: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: .15s linear;

  &:hover{
    opacity: .7;
    color: #46d4ffff;
    text-shadow: 5px 3px 3px #155e68ff;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      &:hover {
        color: #db0000ff;
        text-shadow: 5px 3px 3px #b93821ff;
      }
    `}
`;

export const MenuRight = styled.div`
.hok{
  font-family: 'Roboto', 'Arial';
  font-size: .75rem
  line-height: 1.5rem;
  color: #ffffff;
  margin-right: .75rem;
  text-decoration: none;
  transition: .15s linear;

  &:hover{
    opacity: .7;
    transform: scale(1.02);
    color: #0084ffff;
    text-shadow: 3px 3px 3px #16548dff;
  }
}
`;

export const UserPicture = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  aspect-ratio: 1/1;
  border-radius: 1.37rem;
  border: 2px solid #ffffff;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #ffffff;

  &:active,
  &:focus {
    outline: none;
  }
`;
