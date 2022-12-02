import styled from "styled-components";

export const Button = styled.button`
  width: 80px;
  height: 35px;
  background: #5c9ead;
  border-radius: 20px;
  border: none;
  color: white;
  & :active {
    background: #326273;
  }
`;
export const ActiveButton = styled.button`
  width: 80px;
  height: 35px;
  background: #326273;
  border-radius: 20px;
  border: none;
  color: white;
`;
