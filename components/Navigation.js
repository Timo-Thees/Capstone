import styled from "styled-components";
import {Button} from "./Button";
import {ActiveButton} from "./Button";

export default function Navigation({handleChangePage, page}) {
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
      {page === "editor" ? (
        <ActiveButton onClick={() => handleChangePage("editor")}>
          Projects
        </ActiveButton>
      ) : (
        <Button onClick={() => handleChangePage("editor")}>Projects</Button>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
