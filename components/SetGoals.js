import {useState} from "react";
import Timeslot from "./Timeslot";

export default function SetGoals({page}) {
  const [writingTime, setWritingTime] = useState([{weekday: "never", key: 0}]);
  function handleNewTimeslot(Day) {
    const lastEntry = writingTime[writingTime.length - 1];
    const newKey = lastEntry.key + 1;
    setWritingTime([...writingTime, {weekday: Day, key: newKey}]);
  }
  function handleDeleteTimeslot(keyForDeletion) {
    event.preventDefault();
    const deleteEntry = writingTime.findIndex(object => {
      return object.key === keyForDeletion;
    });
    setWritingTime(writingTime.splice(deleteEntry, 1));
    return writingTime;
  }
  /* const [goals, setGoals] = useState({dailyGoal: 0, writingTimes: {}});*/
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
                })}{" "}
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
const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
