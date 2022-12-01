import styled from "styled-components";

export default function Navigation({handleChangePage}) {
  return (
    <Nav>
      <button onClick={() => handleChangePage("goals")}>Set Goals</button>
      <button onClick={() => handleChangePage("progress")}>Progress</button>
      <button onClick={() => handleChangePage("editor")}>Projects</button>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
