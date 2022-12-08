import Editor from "../components/Editor";
import Navigation from "../components/Navigation";
import SetGoals from "../components/SetGoals";
import Progress from "../components/Progress";
import Projects from "../components/Projects";
import {useState} from "react";
import styled from "styled-components";

export default function Home() {
  const [page, setPage] = useState("my projects");
  function handleChangePage(destination) {
    setPage(destination);
  }
  const [myProjects, setMyProjects] = useState([]);
  function saveProjects(title, text, id) {
    if (title === "") {
      title = "Unnamed Document";
    }
    setMyProjects([...myProjects, {title: title, text: text, id: id}]);
  }
  const [editorContent, setEditorContent] = useState({title: "", text: ""});
  return (
    <Body>
      <Navigation handleChangePage={handleChangePage} page={page} />
      {page === "goals" ? <SetGoals /> : <></>}
      {page === "progress" ? <Progress /> : <></>}
      {page === "my projects" ? (
        <Projects
          myProjects={myProjects}
          handleChangePage={handleChangePage}
          setEditorContent={setEditorContent}
        />
      ) : (
        <></>
      )}
      {page === "editor" ? (
        <Editor
          saveProjects={saveProjects}
          handleChangePage={handleChangePage}
          editorContent={editorContent}
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
  height: 150vh;
`;
