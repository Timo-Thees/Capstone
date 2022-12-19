import styled from "styled-components";
import {TitleField, TextField} from "./Textfields";
import {Button, ButtonContainer} from "./Button";
import {useState} from "react";
import ClosingPopup from "./ClosingMessage";

export default function Editor({
  saveProjects,
  handleChangePage,
  editorContent,
  nameTakenContent,
}) {
  const [sessionClose, setSessionClose] = useState({
    wordcount: 0,
    showClosingMessage: false,
  });
  const [wordcount, setWordcount] = useState(editorContent.wordcount);
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    const id = editorContent.id;
    const finalWordCount = wordcount - editorContent.wordcount;
    setSessionClose({wordcount: finalWordCount, showClosingMessage: true});
    saveProjects(title, text, id, wordcount);
  };
  return (
    <div>
      {sessionClose.showClosingMessage && !nameTakenContent.taken && (
        <ClosingPopup
          sessionClose={sessionClose}
          setSessionClose={setSessionClose}
          handleChangePage={handleChangePage}
        />
      )}
      <Form onSubmit={handleSave}>
        <TitleField
          type="text"
          name="title"
          placeholder="New Story"
          defaultValue={editorContent.title}
        ></TitleField>
        {/*<p>
           You started today with {editorContent.wordcount} words and now you
          have {wordcount}
        </p> */}
        <TextField
          type="text"
          name="text"
          placeholder="It was a dark and stormy night..."
          defaultValue={editorContent.text}
          onChange={e => {
            setWordcount(e.target.value.split(" ").length);
          }}
        ></TextField>
        <ButtonContainer>
          <Button type="submit">Save and Quit</Button>
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
