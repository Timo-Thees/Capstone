import Editor from "../components/Editor";
import Navigation from "../components/Navigation";
import SetGoals from "../components/SetGoals";
import Progress from "../components/Progress";
import Projects from "../components/Projects";
import {useState} from "react";
import styled from "styled-components";

// function saveText(title = "Unnamed Document", text) {
//   const saveItem = {title: title, text: text};
//   localStorage.setItem("writeNow save files", JSON.stringify(saveItem));
// }

export default function Home() {
  const [page, setPage] = useState("editor");
  function handleChangePage(destination) {
    setPage(destination);
  }
  const [myProjects, setMyProjects] = useState([]);
  function saveProjects(title, text) {
    setMyProjects(...myProjects, {title: title, text: text});
  }
  return (
    <Body>
      <Navigation handleChangePage={handleChangePage} page={page} />
      {page === "goals" ? <SetGoals /> : <></>}
      {page === "progress" ? <Progress /> : <></>}
      {page === "my projects" ? (
        <Projects myProjects={myProjects} handleChangePage={handleChangePage} />
      ) : (
        <></>
      )}
      {page === "editor" ? (
        <Editor
          saveProjects={saveProjects}
          handleChangePage={handleChangePage}
        />
      ) : (
        <></>
      )}
    </Body>
  );
}

const Body = styled.div`
  background: #eeeeee;
  width: 100vw;
  height: 100vh;
`;
