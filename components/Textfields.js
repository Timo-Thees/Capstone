import styled from "styled-components";

export const TitleField = styled.input`
  outline: none;
  border: 2px solid #5c9ead;
  border-radius: 8px;
  padding: 8px;
  height: 32px;
  width: 40vw;
  & :focus {
    outline: 10px solid #326273;
  }
`;

export const TextField = styled.textarea`
  border: 2px #5c9ead;
  border-radius: 8px;
  padding: 8px;
  height: 60vh;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14pt;
  color: #555555;
  & :target {
    border: 10px #326273;
  }
`;

// border: 5px #5c9ead;
// border-radius: 4px;
