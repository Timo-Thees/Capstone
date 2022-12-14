import styled from "styled-components";
import {TitleField, TextField} from "../styles/Textfields";
import {Button} from "../styles/Button";
import {useState} from "react";
import ClosingPopup from "./ClosingMessage";

export default function Editor({
  saveProjects,
  handleChangePage,
  editorContent,
  nameTakenContent,
  progressTracker,
  writingGoals,
  dailyProgress,
  sessionClose,
  setSessionClose,
}) {
  const [wordcount, setWordcount] = useState(editorContent.wordcount);
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    const id = editorContent.id;
    const finalWordCount = wordcount - editorContent.wordcount;
    const today = new Date();
    const weekday = today.getDay();
    const dayOfTheMonth = today.getDate();
    const month = today.getMonth();
    const calenderDay = `${dayOfTheMonth}` + "." + (month + 1);
    setSessionClose({
      wordcount: finalWordCount,
      showClosingMessage: true,
      calenderDay: calenderDay,
      weekday: weekday,
    });
    progressTracker(finalWordCount);
    saveProjects(title, text, id, wordcount);
  };
  return (
    <div>
      {sessionClose.showClosingMessage && !nameTakenContent.taken && (
        <ClosingPopup
          sessionClose={sessionClose}
          setSessionClose={setSessionClose}
          handleChangePage={handleChangePage}
          writingGoals={writingGoals}
          dailyProgress={dailyProgress}
        />
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
