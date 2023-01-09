import styled from "styled-components";

export const Button = styled.button`
  width: 80px;
  height: 35px;
  background: #5c9ead;
  border-radius: 20px;
  border: none;
  color: white;
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const ActiveButton = styled.button`
  width: 80px;
  height: 35px;
  background: #326273;
  border-radius: 20px;
  border: none;
  color: white;
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const DangerButton = styled.button`
  width: 80px;
  height: 35px;
  background: #ec7a4a;
  border-radius: 20px;
  border: none;
  color: white;
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonBox = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: space-around;
`;
