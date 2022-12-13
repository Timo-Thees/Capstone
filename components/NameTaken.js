import {TitleField} from "./Textfields";
import {Overlay, Dialog, ButtonBox} from "../styles/PopupStyles";

export default function NameTaken({
  nameTakenContent,
  saveProjects,
  setNameTakenContent,
  setPage,
  setEditorContent,
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
            <button
              onClick={() =>
                handleReturnToEditor(
                  nameTakenContent.title,
                  nameTakenContent.text,
                  nameTakenContent.id
                )
              }
            >
              Return to Editor
            </button>
            <button onClick={() => handleCloseWithoutSaving()}>
              Close without saving
            </button>
          </ButtonBox>
        </form>
      </Dialog>
    </Overlay>
  );
}
