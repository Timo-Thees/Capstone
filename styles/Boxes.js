import styled from "styled-components";

export const AllFiles = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  display: grid;
  padding: 2vh 2vw;
  gap: 2vh;
  overflow: none;
`;

export const FileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh 1vw;
  background-color: #b2d7df;
  border-radius: 16px;
  align-items: center;
  text-align: center;
  padding: 3vh 2vw;
  min-width: 55vw;
`;

export const SpecialBox = styled(FileBox)`
  background-color: #5c9ead;
`;

export const TextPreview = styled.article`
  max-height: 20vh;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-bottom: 3vh;
`;

export const Fade = styled.div`
  clip-path: linear-gradient(180deg, #000 95%, transparent);
`;
