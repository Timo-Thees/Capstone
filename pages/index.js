import MyApp from "./_app";
import Editor from "../components/editor";

function saveText(title = "Unnamed Document", text) {
  localStorage.setItem(`${title}`, `${text}`);
}

export default function Home() {
  return (
    <div>
      <MyApp />
      <Editor saveText={saveText} />
    </div>
  );
}
