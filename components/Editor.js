import styled from "styled-components";
import {TitleField, TextField} from "./Textfields";
import {Button} from "./Button";

export default function Editor({saveProjects, handleChangePage}) {
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    saveProjects(title, text);
  };
  return (
    <div>
      <Form onSubmit={handleSave}>
        <TitleField
          type="text"
          name="title"
          id="title"
          placeholder="New Story"
        ></TitleField>
        <TextField
          name="text"
          id="text"
          placeholder="It was a dark and stormy night..."
        ></TextField>
        <ButtonContainer>
          <Button type="submit">Save</Button>
          <Button onClick={() => handleChangePage("my projects")}>Load</Button>
        </ButtonContainer>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 50px;
  gap: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
