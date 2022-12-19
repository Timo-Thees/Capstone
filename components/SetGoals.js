import {useState} from "react";
import Timeslot from "./Timeslot";
import {Button /*ButtonContainer, ButtonDanger*/} from "./Button";
import styled from "styled-components";

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function SetGoals() {
  const [writingTime, setWritingTime] = useState([{weekday: "never", key: 0}]);
  function handleNewTimeslot(Day) {
    const lastEntry = writingTime[writingTime.length - 1];
    const newKey = lastEntry.key + 1;
    setWritingTime([...writingTime, {weekday: Day, key: newKey}]);
  }
  function handleDeleteTimeslot(keyForDeletion) {
    event.preventDefault();
    setWritingTime(writingTime.filter(time => time.key !== keyForDeletion));
  }
  return (
    <>
      <label>How many words do you want to write each day?</label>
      <input type="number"></input>
      <Calendar>
        {weekday.map(day => {
          return (
            <li key={weekday.index}>
              {day}
              {writingTime.map(timeslot => {
                if (timeslot.weekday === day) {
                  return (
                    <Timeslot
                      key={timeslot.key}
                      handleDeleteTimeslot={handleDeleteTimeslot}
                      keyForDeletion={timeslot.key}
                    />
                  );
                }
              })}
              <Button onClick={() => handleNewTimeslot(day)}>+</Button>
            </li>
          );
        })}
      </Calendar>
    </>
  );
}

const Calendar = styled.ul`
  direction: flex;
  flex-direction: row;
`;
