import Editor from "../components/Editor";
import Navigation from "../components/Navigation";

function saveText(title = "Unnamed Document", text) {
  localStorage.setItem(`${title}`, `${text}`);
}
export default function Home() {
  return (
    <div>
      <Navigation />
      <Editor saveText={saveText} />
    </div>
  );
}
