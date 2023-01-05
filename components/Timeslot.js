import {Button, ButtonBox} from "./Button";
import styled from "styled-components";

export default function Timeslot({
  handleDeleteTimeslot,
  keyForDeletion,
  day,
  handleUpdateTimeslot,
  startingTime,
  endingTime,
  handleChangeWritingTime,
}) {
  return (
    <form onSubmit={() => handleUpdateTimeslot(keyForDeletion)}>
      {startingTime !== "" && endingTime !== "" ? (
        <>
          <Textbox>
            <Textblock>
              In this timeslot you <br /> want to write from <br />
              {startingTime} to {endingTime}.
            </Textblock>
            <ButtonBox>
              <Button onClick={() => handleChangeWritingTime(keyForDeletion)}>
                Change Time
              </Button>
              <Button onClick={() => handleDeleteTimeslot(keyForDeletion, day)}>
                Delete
              </Button>
            </ButtonBox>
          </Textbox>
        </>
      ) : (
        <>
          <Textbox>
            <input type="time" id="startingTime"></input>
            <input type="time" id="endingTime"></input>
            <Button type="submit">Set time</Button>
            <Button onClick={() => handleDeleteTimeslot(keyForDeletion, day)}>
              Delete
            </Button>
          </Textbox>
        </>
      )}
    </form>
  );
}

const Textblock = styled.article`
  font-size: 10pt;
  padding-top: 2vh;
`;

const Textbox = styled.div`
  background-color: #dceef2;
  border-radius: 16px;
  text-align: center;
  direction: flex;
  flex-direction: column;
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-bottom: 1.5vh;
`;
