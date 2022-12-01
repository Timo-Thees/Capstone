import Editor from "../components/Editor";
import Navigation from "../components/Navigation";
import SetGoals from "../components/SetGoals";
import Progress from "../components/Progress";
import {useState} from "react";

function saveText(title = "Unnamed Document", text) {
  localStorage.setItem(`${title}`, `${text}`);
}

export default function Home() {
  const [page, setPage] = useState("editor");
  function handleChangePage(destination) {
    setPage(destination);
  }
  return (
    <div>
      <Navigation handleChangePage={handleChangePage} />
      <SetGoals page={page} />
      <Progress page={page} />
      <Editor saveText={saveText} page={page} />
    </div>
  );
}
