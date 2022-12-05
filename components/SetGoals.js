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
    writingTime.splice(deleteEntry, 1);
    return;
  }
  // const [goals, setGoals] = useState({dailyGoal: 0, writingTimes: {}});
  if (page === "goals") {
    return (
      <>
        <label>How many words do you want to write each day?</label>
        <input type="number"></input>
        <ul>
          <li>
            {" "}
            Monday
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
          </li>
          <li>
            {" "}
            Tuesday
            {writingTime.map(timeslot => {
              if (timeslot.weekday === "Tue") {
                return (
                  <Timeslot
                    key={timeslot.key}
                    handleDeleteTimeslot={handleDeleteTimeslot}
                    keyForDeletion={timeslot.key}
                  />
                );
              }
            })}
            <button onClick={() => handleNewTimeslot("Tue")}>+</button>
          </li>
          <li>
            {" "}
            Wednesday
            {writingTime.map(timeslot => {
              if (timeslot.weekday === "Wen") {
                return (
                  <Timeslot
                    key={timeslot.key}
                    handleDeleteTimeslot={handleDeleteTimeslot}
                    keyForDeletion={timeslot.key}
                  />
                );
              }
            })}
            <button onClick={() => handleNewTimeslot("Wen")}>+</button>
          </li>
          <li>
            {" "}
            Thursday
            {writingTime.map(timeslot => {
              if (timeslot.weekday === "Thu") {
                return (
                  <Timeslot
                    key={timeslot.key}
                    handleDeleteTimeslot={handleDeleteTimeslot}
                    keyForDeletion={timeslot.key}
                  />
                );
              }
            })}
            <button onClick={() => handleNewTimeslot("Thu")}>+</button>
          </li>
          <li>
            {" "}
            Friday
            {writingTime.map(timeslot => {
              if (timeslot.weekday === "Fri") {
                return (
                  <Timeslot
                    key={timeslot.key}
                    handleDeleteTimeslot={handleDeleteTimeslot}
                    keyForDeletion={timeslot.key}
                  />
                );
              }
            })}
            <button onClick={() => handleNewTimeslot("Fri")}>+</button>
          </li>
          <li>
            {" "}
            Saturday
            {writingTime.map(timeslot => {
              if (timeslot.weekday === "Sat") {
                return (
                  <Timeslot
                    key={timeslot.key}
                    handleDeleteTimeslot={handleDeleteTimeslot}
                    keyForDeletion={timeslot.key}
                  />
                );
              }
            })}
            <button onClick={() => handleNewTimeslot("Sat")}>+</button>
          </li>
          <li>
            {" "}
            Sunday
            {writingTime.map(timeslot => {
              if (timeslot.weekday === "Sun") {
                return (
                  <Timeslot
                    key={timeslot.key}
                    handleDeleteTimeslot={handleDeleteTimeslot}
                    keyForDeletion={timeslot.key}
                  />
                );
              }
            })}
            <button onClick={() => handleNewTimeslot("Sun")}>+</button>
          </li>
        </ul>
      </>
    );
  } else {
    return;
  }
}
