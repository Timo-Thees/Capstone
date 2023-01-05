import {TitleField} from "./Textfields";
import {Overlay, Dialog} from "../styles/PopupStyles";
import {LargeButton, LargeDangerButton, ButtonBox} from "./Button";

export default function NameTaken({
  nameTakenContent,
  saveProjects,
  setNameTakenContent,
  setPage,
  setEditorContent,
  setMyProjects,
  myProjects,
  setSessionClose,
}) {
  function handleReturnToEditor(title, text, id) {
    setEditorContent({title: title, text: text, id: id});
    setPage("editor");
    setSessionClose({
      wordcount: 0,
      showClosingMessage: false,
    });
    setNameTakenContent({title: "", text: "", id: 0, taken: false});
  }
  function handleCloseWithoutSaving() {
    setNameTakenContent({title: "", text: "", id: 0, taken: false});
  }
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = nameTakenContent.text;
    const id = nameTakenContent.id;
    const wordcount = nameTakenContent.wordcount;
    setNameTakenContent({title: "", text: "", id: 0, taken: false});
    saveProjects(title, text, id, wordcount);
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
            <LargeButton type="submit">Save</LargeButton>
            <LargeDangerButton
              onClick={() => handleOverwrite(nameTakenContent)}
            >
              Overwrite
              <br />
              existing save
            </LargeDangerButton>
            <LargeDangerButton onClick={() => handleCloseWithoutSaving()}>
              Close without <br />
              saving
            </LargeDangerButton>
            <LargeButton onClick={() => handleReturnToEditor()}>
              Return to <br />
              editor
            </LargeButton>
          </ButtonBox>
        </form>
      </Dialog>
    </Overlay>
  );
}
