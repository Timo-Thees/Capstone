import {TitleField} from "./Textfields";
import styled from "styled-components";

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

const Overlay = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
`;

const Dialog = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 100%;
  width: 50vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
