import styled from "styled-components";

export const Button = styled.button`
  margin: 1vh 1vw;
  min-width: 80px;
  min-height: 35px;
  background: #5c9ead;
  border-radius: 20px;
  border: none;
  color: white;
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const ActiveButton = styled(Button)`
  background: #326273;
  width: 100px;
  height: 40px;
`;
export const DangerButton = styled(Button)`
  background: #ec7a4a;
`;

export const SmallButton = styled(Button)`
  min-width: 30px;
  min-height: 30px;
`;

export const LargeButton = styled(Button)`
  width: 100px;
  height: 40px;
`;

export const LargeDangerButton = styled(DangerButton)`
  width: 100px;
  height: 40px;
`;

export const ButtonBox = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 2vh;
`;
