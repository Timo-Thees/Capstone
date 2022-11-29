import GlobalStyles from "../styles/GlobalStyles";
import Editor from "./editor";

function saveText(title = "Unnamed Document", text) {
  localStorage.setItem(`${title}`, `${text}`);
}
function loadText(title) {
  localStorage.getItem(`${title}`);
}

function MyApp() {
  return (
    <>
      <GlobalStyles />
      <Editor saveText={saveText} loadText={loadText} />
    </>
  );
}

export default MyApp;
