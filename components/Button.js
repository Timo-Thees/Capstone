import styled from "styled-components";

export const Button = styled.button`
  width: 80px;
  height: 35px;
  background: #5c9ead;
  border-radius: 20px;
  border: none;
  color: white;
`;
export const ActiveButton = styled.button`
  width: 80px;
  height: 35px;
  background: #326273;
  border-radius: 20px;
  border: none;
  color: white;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  bottom: 2vh;
`;

export const ButtonDanger = styled.button`
  width: 80px;
  height: 35px;
  background: #ec7a4a;
  border-radius: 20px;
  border: none;
  color: white;
`;
