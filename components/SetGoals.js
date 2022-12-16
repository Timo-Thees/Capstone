import {useState} from "react";
import Timeslot from "./Timeslot";
import {Button} from "./Button";

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function SetGoals({progress, setProgress}) {
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
  function handelSetGoals(e) {
    event.preventDefault();
    setProgress({...progress, goal: e});
  }
  return (
    <>
      <label>How many words do you want to write each day?</label>
      <form onSubmit={e => handelSetGoals(e)}>
        <input type="number"></input>
        <Button type="submit">Set Goal</Button>
        <Button onClick={() => console.log(progress)}>Show Goals</Button>
      </form>
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
}
