import {useState} from "react";
import Timeslot from "./Timeslot";

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function SetGoals({page}) {
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
  if (page === "goals") {
    return (
      <>
        <label>How many words do you want to write each day?</label>
        <input type="number"></input>
        <ul>
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
                <button onClick={() => handleNewTimeslot(day)}>+</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return;
  }
}
