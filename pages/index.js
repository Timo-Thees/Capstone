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
  const [writingGoals, setWritingGoals] = useLocalStorage("writeNow! goals", [
    {
      writingGoal: 0,
      weekday: "",
      key: 0,
    },
  ]);
  const [dailyProgress, setDailyProgress] = useLocalStorage(
    "WriteNow! progressTracker",
    []
  );
  const [sessionClose, setSessionClose] = useState({
    wordcount: 0,
    showClosingMessage: false,
  });
  function progressTracker(wordsIWroteThisSession) {
    const today = new Date();
    const weekday = today.getDay();
    const dayOfTheMonth = today.getDate();
    const month = today.getMonth();
    const calenderDay = `${dayOfTheMonth}` + "." + (month + 1);
    const myGoal = writingGoals[0].writingGoal;
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
      const goalReached = `Today I wrote ${newNumber} words from my set goal of ${myGoal}`;
      const updatedReport = {
        ...didIwriteToday,
        wordsIWroteToday: newNumber,
        goalReached: goalReached,
      };
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
          setSessionClose={setSessionClose}
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
      {page === "progress" ? <Progress dailyProgress={dailyProgress} /> : <></>}
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
          writingGoals={writingGoals}
          dailyProgress={dailyProgress}
          sessionClose={sessionClose}
          setSessionClose={setSessionClose}
        />
      ) : (
        <></>
      )}
    </Body>
  );
}

const Body = styled.div`
  background: #eeeeee;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
