import {TitleField} from "./Textfields";
import {Overlay, Dialog, ButtonBox} from "../styles/PopupStyles";

export default function NameTaken({
  nameTakenContent,
  saveProjects,
  setNameTakenContent,
  setPage,
  setEditorContent,
  setMyProjects,
  myProjects,
}) {
  function handleReturnToEditor(title, text, id) {
    setEditorContent({title: title, text: text, id: id});
    setPage("editor");
  }
  function handleCloseWithoutSaving() {
    setNameTakenContent({title: "", text: "", id: 0, taken: false});
  }
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = nameTakenContent.text;
    const id = nameTakenContent.id;
    setNameTakenContent({title: "", text: "", id: 0, taken: false});
    saveProjects(title, text, id);
  };
  function handleOverwrite(content) {
    const updatedFile = myProjects.map(project => {
      if (project.title === content.title) {
        return {
          ...project,
          title: content.title,
          text: content.text,
          wordcount: content.wordcount,
          id: content.id,
        };
      }
      return project;
    });
    setMyProjects([...updatedFile]);
    setNameTakenContent({title: "", text: "", id: 0, taken: false});
  }

  return (
    <Overlay>
      <Dialog>
        <h2>
          A Story with that name does already exist. <br /> Please choose a
          different name.
        </h2>
        <form onSubmit={handleSave}>
          <TitleField
            type="text"
            name="title"
            id="title"
            defaultValue={nameTakenContent.title}
          ></TitleField>
          <ButtonBox>
            <button type="submit">Save</button>
            <button onClick={() => handleOverwrite(nameTakenContent)}>
              Overwrite the existing save
            </button>
            <button onClick={() => handleCloseWithoutSaving()}>
              Close without saving
            </button>
            <button onClick={() => handleReturnToEditor()}>
              Return to editor
            </button>
          </ButtonBox>
        </form>
      </Dialog>
    </Overlay>
  );
}
