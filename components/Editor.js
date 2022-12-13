import styled from "styled-components";
import {TitleField, TextField} from "./Textfields";
import {Button} from "./Button";
import {useState} from "react";

export default function Editor({
  saveProjects,
  handleChangePage,
  editorContent,
}) {
  const [wordcount, setWordcount] = useState(editorContent.wordcount);
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    const id = editorContent.id;
    handleChangePage("my projects");
    saveProjects(title, text, id);
  };
  function adjustWordcount(number) {
    setWordcount(number.split(" ").length);
  }
  return (
    <div>
      <Form onSubmit={handleSave}>
        <TitleField
          type="text"
          name="title"
          placeholder="New Story"
          defaultValue={editorContent.title}
        ></TitleField>
        <p>
          You started today with {editorContent.wordcount} words and now you
          have {wordcount}
        </p>
        <TextField
          type="text"
          name="text"
          placeholder="It was a dark and stormy night..."
          defaultValue={editorContent.text}
          onChange={e => {
            adjustWordcount(e.target.value);
          }}
        ></TextField>
        <ButtonContainer>
          <Button type="submit">Save and Quit</Button>
          <Button onClick={() => handleChangePage("my projects")}>Load</Button>
          <Button onClick={() => console.log(editorContent)}>Console</Button>
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
