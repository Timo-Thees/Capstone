import Editor from "./editor";

function saveText(title = "Unnamed Document", text) {
  localStorage.setItem(`${title}`, `${text}`);
}
function loadText(title) {
  localStorage.getItem(`${title}`);
}

export default function Home() {
  return (
    <div>
      <Editor saveText={saveText} loadText={loadText} />
    </div>
  );
}
