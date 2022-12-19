import {TitleField} from "./Textfields";
import {Overlay, Dialog, ButtonBox} from "../styles/PopupStyles";
import {Button, ButtonContainer, ButtonDanger} from "./Button";

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
            <ButtonContainer>
              <Button type="submit">Save</Button>
              <ButtonDanger onClick={() => handleOverwrite(nameTakenContent)}>
                Overwrite the existing save
              </ButtonDanger>
              <Button onClick={() => handleCloseWithoutSaving()}>
                Close without saving
              </Button>
              <Button onClick={() => handleReturnToEditor()}>
                Return to editor
              </Button>
            </ButtonContainer>
          </ButtonBox>
        </form>
      </Dialog>
    </Overlay>
  );
}
