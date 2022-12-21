import {useState} from "react";
import Timeslot from "./Timeslot";
import {Button} from "./Button";
// import {useLocalStorage} from "../components/useLocalStorage";

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
  const [wordGoals, setWordGoals] = useState(0);

  function handleNewTimeslot(day) {
    const lastEntry = writingTime[writingTime.length - 1];
    const newKey = lastEntry.key + 1;
    setWritingTime([...writingTime, {weekday: day, key: newKey}]);
    updateWritingGoals(day);
  }
  function handleDeleteTimeslot(keyForDeletion, day) {
    event.preventDefault();
    setWritingTime(writingTime.filter(time => time.key !== keyForDeletion));
    updateWritingGoals(day);
  }
  function updateWritingGoals(day) {
    const doIWriteThisDay = writingTime.find(
      timeslot => timeslot.weekday === day
    );
    if (doIWriteThisDay === undefined) {
      setProgress({...progress, [day]: 0});
    } else {
      setProgress({...progress, [day]: wordGoals});
    }
    console.log(progress);
  }
  const handelSetGoals = event => {
    event.preventDefault();
    setWordGoals(event.target.goal.value);
  };
  return (
    <>
      <label>How many words do you want to write each day?</label>
      <form onSubmit={handelSetGoals}>
        <input type="number" id="goal"></input>
        <Button type="submit">Set Goal</Button>
        <Button onClick={() => console.log(wordGoals)}>Show Goals</Button>
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
                      day={timeslot.weekday}
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
