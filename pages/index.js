import Editor from "../components/Editor";
import Navigation from "../components/Navigation";
import SetGoals from "../components/SetGoals";
import Progress from "../components/Progress";
import Projects from "../components/Projects";
import NameTaken from "../components/NameTaken";
import {useState} from "react";
import styled from "styled-components";
import {useLocalStorage} from "../components/useLocalStorage";

export default function Home() {
  const [page, setPage] = useState("my projects");
  function handleChangePage(destination) {
    setPage(destination);
  }
  const [myProjects, setMyProjects] = useLocalStorage(
    "WriteNow! Save files",
    []
  );
  const [writingGoals, setWritingGoals] = useLocalStorage("writeNow! goals", {
    writingGoal: 0,
    Weekdays: [],
  });
  const [dailyProgress, setDailyProgress] = useLocalStorage(
    "WriteNow! progressTracker",
    []
  );
  function progressTracker(wordsIWroteThisSession) {
    const today = new Date();
    const weekday = today.getDay();
    const dayOfTheMonth = today.getDate();
    const month = today.getMonth();
    const calenderDay = `${dayOfTheMonth}` + "." + (month + 1);
    const dailyProgressReport = {
      weekday: weekday,
      calenderDay: calenderDay,
      wordsIWroteToday: 0,
    };
    const didIwriteToday = dailyProgress.find(
      progressReports => progressReports.weekday === weekday
    );
    if (didIwriteToday !== undefined) {
      const newNumber =
        didIwriteToday.wordsIWroteToday + wordsIWroteThisSession;
      const updatedReport = {...didIwriteToday, wordsIWroteToday: newNumber};
      const newArray = dailyProgress.filter(
        dailyReports => dailyReports.calenderDay !== calenderDay
      );
      setDailyProgress([...newArray, updatedReport]);
    } else {
      const newReport = {
        ...dailyProgressReport,
        wordsIWroteToday: wordsIWroteThisSession,
      };
      setDailyProgress([...dailyProgress, newReport]);
    }
  }
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
    <Body>
      <Navigation handleChangePage={handleChangePage} page={page} />
      {nameTakenContent.taken === true ? (
        <NameTaken
          nameTakenContent={nameTakenContent}
          saveProjects={saveProjects}
          setMyProjects={setMyProjects}
          setPage={setPage}
          setNameTakenContent={setNameTakenContent}
          setEditorContent={setEditorContent}
          myProjects={myProjects}
        />
      ) : (
        <></>
      )}
      {page === "goals" ? (
        <SetGoals
          writingGoals={writingGoals}
          setWritingGoals={setWritingGoals}
        />
      ) : (
        <></>
      )}
      {page === "progress" ? <Progress /> : <></>}
      {page === "my projects" ? (
        <Projects
          myProjects={myProjects}
          handleChangePage={handleChangePage}
          setEditorContent={setEditorContent}
          setMyProjects={setMyProjects}
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
          progressTracker={progressTracker}
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
