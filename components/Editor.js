import styled from "styled-components";
import {TitleField, TextField} from "./Textfields";
import {Button} from "./Button";
import {useState} from "react";
import ClosingPopup from "./ClosingMessage";

export default function Editor({
  saveProjects,
  handleChangePage,
  editorContent,
  nameTakenContent,
}) {
  const [finalCount, setFinalCount] = useState({
    finalWordcount: 0,
    closingMessage: false,
  });
  const [wordcount, setWordcount] = useState(editorContent.wordcount);
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    const id = editorContent.id;
    const finalWordCount = wordcount - editorContent.wordcount;
    setFinalCount({finalWordcount: finalWordCount, closingMessage: true});
    saveProjects(title, text, id, wordcount);
  };
  return (
    <div>
      {finalCount.closingMessage && !nameTakenContent.taken === false ? (
        <ClosingPopup
          finalCount={finalCount}
          setFinalCount={setFinalCount}
          handleChangePage={handleChangePage}
        />
      ) : (
        <></>
      )}
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
