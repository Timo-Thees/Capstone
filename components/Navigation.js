import styled from "styled-components";
import {Button, ActiveButton} from "./Button";

export default function Navigation({
  handleChangePage,
  page,
  darkmode,
  setDarkmode,
}) {
  return (
    <Nav>
      {page === "goals" ? (
        <ActiveButton onClick={() => handleChangePage("goals")}>
          Set Goals
        </ActiveButton>
      ) : (
        <Button onClick={() => handleChangePage("goals")}>Set Goals</Button>
      )}
      {page === "progress" ? (
        <ActiveButton onClick={() => handleChangePage("progress")}>
          Progress
        </ActiveButton>
      ) : (
        <Button onClick={() => handleChangePage("progress")}>Progress</Button>
      )}
      {page === "my projects" || page === "editor" ? (
        <ActiveButton onClick={() => handleChangePage("my projects")}>
          Projects
        </ActiveButton>
      ) : (
        <Button onClick={() => handleChangePage("my projects")}>
          Projects
        </Button>
      )}
      <Button onClick={() => setDarkmode(!darkmode)}>Darkmode</Button>
      <Button onClick={() => console.log(darkmode)}>Is this thing on?</Button>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
