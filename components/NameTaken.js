import {TitleField} from "./Textfields";
import styled from "styled-components";

export default function NameTaken({
  nameTakenContent,
  saveProjects,
  setNameTakenContent,
}) {
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = nameTakenContent.text;
    const id = nameTakenContent.id;
    saveProjects(title, text, id);
    setNameTakenContent({title: "", text: "", id: 0, taken: false});
  };
  return (
    <Overlay>
      <div>
        <h1>
          A file with that name does already exist. Please choose a different
          name.
        </h1>
        <form onSubmit={handleSave}>
          <TitleField
            type="text"
            name="title"
            id="title"
            placeholder="New Story"
            defaultValue={nameTakenContent.title}
          ></TitleField>
          <button type="submit">Save</button>
        </form>
      </div>
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
