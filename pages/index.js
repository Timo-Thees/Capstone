import Editor from "../components/Editor";

function saveText(title = "Unnamed Document", text) {
  localStorage.setItem(`${title}`, `${text}`);
}
export default function Home() {
  return (
    <div>
      <Editor saveText={saveText} />
    </div>
  );
}
