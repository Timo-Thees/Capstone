import styled from "styled-components";
import {TitleField, TextField} from "./Textfields";
import {Button} from "./Button";

export default function Editor({saveText, page}) {
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    saveText(title, text);
  };
  if (page === "editor") {
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
          >
            Lets write something fun
          </TextField>
          <ButtonContainer>
            <Button type="submit">Save</Button>
            <Button>Load</Button>
          </ButtonContainer>
        </Form>
      </div>
    );
  } else {
    return;
  }
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
