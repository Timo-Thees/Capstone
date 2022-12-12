import Editor from "../components/Editor";
import Navigation from "../components/Navigation";
import SetGoals from "../components/SetGoals";
import Progress from "../components/Progress";
import Projects from "../components/Projects";
import NameTaken from "../components/NameTaken";
import {useState} from "react";
import styled from "styled-components";

export default function Home() {
  const [page, setPage] = useState("my projects");
  function handleChangePage(destination) {
    setPage(destination);
  }
  const [myProjects, setMyProjects] = useState([]);
  const [editorContent, setEditorContent] = useState({title: "", text: ""});
  const [nameTakenContent, setNameTakenContent] = useState({
    title: "",
    text: "",
    id: 0,
    taken: false,
  });

  function saveProjects(title, text, id) {
    if (title === "") {
      title = "Unnamed Document";
    }
    const doesTitleExist = myProjects.find(project => project.title === title);
    const doesIdExist = myProjects.find(project => project.id === id);
    if (doesTitleExist !== undefined && doesIdExist === undefined) {
      setNameTakenContent({title: title, text: text, id: id, taken: true});
      return;
    }
    if (doesIdExist !== undefined) {
      const updatedFile = myProjects.map(project => {
        if (project.id === doesIdExist.id) {
          return {...project, title: title, text: text};
        }
        return project;
      });
      setMyProjects([...updatedFile]);
    } else {
      setMyProjects([...myProjects, {title: title, text: text, id: id}]);
    }
  }

  return (
    <Body>
      <Navigation handleChangePage={handleChangePage} page={page} />
      {nameTakenContent.taken === true ? (
        <NameTaken
          nameTakenContent={nameTakenContent}
          saveProjects={saveProjects}
          setPage={setPage}
          setNameTakenContent={setNameTakenContent}
        />
      ) : (
        <></>
      )}
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
