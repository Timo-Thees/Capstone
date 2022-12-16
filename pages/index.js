import Editor from "../components/Editor";
import Navigation from "../components/Navigation";
import SetGoals from "../components/SetGoals";
import Progress from "../components/Progress";
import Projects from "../components/Projects";
import NameTaken from "../components/NameTaken";
import {useState} from "react";
import styled from "styled-components";

export default function Home() {
  const [darkmode, setDarkmode] = useState(true);
  const [page, setPage] = useState("my projects");
  function handleChangePage(destination) {
    setPage(destination);
  }
  const [myProjects, setMyProjects] = useState([]);
  const [editorContent, setEditorContent] = useState({
    title: "",
    text: "",
    wordcount: 0,
  });
  const [nameTakenContent, setNameTakenContent] = useState({
    title: "",
    text: "",
    id: 0,
    taken: false,
    wordcount: 0,
  });

  function saveProjects(title, text, id, wordcount) {
    if (title === "") {
      title = "Unnamed Document";
    }
    const doesTitleExist = myProjects.find(project => project.title === title);
    const doesIdExist = myProjects.find(project => project.id === id);
    if (doesTitleExist !== undefined && doesIdExist === undefined) {
      setNameTakenContent({
        title: title,
        text: text,
        id: id,
        wordcount: wordcount,
        taken: true,
      });
      return;
    }
    if (doesIdExist !== undefined) {
      const updatedFile = myProjects.map(project => {
        if (project.id === doesIdExist.id) {
          return {...project, title: title, text: text, wordcount: wordcount};
        }
        return project;
      });
      setMyProjects([...updatedFile]);
    } else {
      setMyProjects([
        ...myProjects,
        {title: title, text: text, id: id, wordcount: wordcount},
      ]);
    }
  }

  return (
    <Body darkmode={darkmode}>
      <Navigation
        handleChangePage={handleChangePage}
        page={page}
        darkmode={darkmode}
        setDarkmode={setDarkmode}
      />
      {nameTakenContent.taken === true ? (
        <NameTaken
          nameTakenContent={nameTakenContent}
          saveProjects={saveProjects}
          setPage={setPage}
          setNameTakenContent={setNameTakenContent}
          setEditorContent={setEditorContent}
          darkmode={darkmode}
        />
      ) : (
        <></>
      )}
      {page === "goals" ? <SetGoals darkmode={darkmode} /> : <></>}
      {page === "progress" ? <Progress darkmode={darkmode} /> : <></>}
      {page === "my projects" ? (
        <Projects
          myProjects={myProjects}
          handleChangePage={handleChangePage}
          setEditorContent={setEditorContent}
          darkmode={darkmode}
        />
      ) : (
        <></>
      )}
      {page === "editor" ? (
        <Editor
          saveProjects={saveProjects}
          handleChangePage={handleChangePage}
          editorContent={editorContent}
          nameTakenContent={nameTakenContent}
          darkmode={darkmode}
        />
      ) : (
        <></>
      )}
    </Body>
  );
}

const Body = styled.div`
  background: ${props => (props.darkmode ? "darkblue" : "eggwhite")};
  width: 100vw;
  height: 150vh;
`;
