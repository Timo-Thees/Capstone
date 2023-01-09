import {Button} from "./Button";

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
          <p>
            In this timeslot you want to write from {startingTime} to{" "}
            {endingTime}.
          </p>
          <Button onClick={() => handleChangeWritingTime(keyForDeletion)}>
            Change Time
          </Button>
        </>
      ) : (
        <>
          <input
            type="time"
            id="startingTime"
            placeholder={startingTime}
          ></input>
          <input type="time" id="endingTime"></input>
          <Button type="submit">Set time</Button>
        </>
      )}
      <Button onClick={() => handleDeleteTimeslot(keyForDeletion, day)}>
        Delete
      </Button>
    </form>
  );
}
