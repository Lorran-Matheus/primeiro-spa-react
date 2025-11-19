import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  padding: 0.6rem;
  font-size: 1rem;
  color: #ffffff;
  width: 100%;
  border: 0;
  height: 30px;

  &:focus,
  &:hover {
    outline: none;
    background-color: #3b3450;
    border-radius: 0.2rem;
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-family: 'Arial';
  font-size: 12px;
  margin-bottom: 5px;
`;
