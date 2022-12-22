import {useState} from "react";
import Timeslot from "./Timeslot";
import {Button} from "./Button";
// import {useLocalStorage} from "../components/useLocalStorage";

const weekday = [
  {weekday: "Monday", key: 1},
  {weekday: "Tuesday", key: 2},
  {weekday: "Wednesday", key: 3},
  {weekday: "Thursday", key: 4},
  {weekday: "Friday", key: 5},
  {weekday: "Saturday", key: 6},
  {weekday: "Sunday", key: 0},
];

export default function SetGoals({writingGoals, setWritingGoals}) {
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
            <li key={day.key}>
              {day.weekday}
              {writingTime.map(timeslot => {
                if (timeslot.weekday === day.weekday) {
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
              <button onClick={() => handleNewTimeslot(day.weekday)}>+</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
