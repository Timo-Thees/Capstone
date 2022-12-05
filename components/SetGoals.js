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
    console.log(writingTime.find(keyForDeletion));
  }
  if (page === "goals") {
    return (
      <>
        <label>How many words do you want to write each day?</label>
        <input type="text"></input>
        <ul>
          <li>
            {" "}
            Monday <input type="radio"></input>
            {writingTime.map(timeslot => {
              if (timeslot.weekday === "Mon") {
                return (
                  <Timeslot
                    key={timeslot.key}
                    handleDeleteTimeslot={handleDeleteTimeslot}
                    keyForDeletion={timeslot.key}
                  />
                );
              }
            })}
            <button onClick={() => handleNewTimeslot("Mon")}>+</button>
            <button onClick={() => console.log(writingTime)}>show</button>
          </li>
        </ul>
      </>
    );
  } else {
    return;
  }
}
