import Timeslot from "./Timeslot";
import {Button} from "./Button";

const weekday = [
  {weekday: "Monday", numberOfDay: 1},
  {weekday: "Tuesday", numberOfDay: 2},
  {weekday: "Wednesday", numberOfDay: 3},
  {weekday: "Thursday", numberOfDay: 4},
  {weekday: "Friday", numberOfDay: 5},
  {weekday: "Saturday", numberOfDay: 6},
  {weekday: "Sunday", numberOfDay: 0},
];

export default function SetGoals({writingGoals, setWritingGoals}) {
  function handleNewTimeslot(day) {
    const lastEntry = writingGoals[writingGoals.length - 1];
    const newKey = lastEntry.key + 1;
    const writingGoal = lastEntry.writingGoal;
    setWritingGoals([
      ...writingGoals,
      {writingGoal: writingGoal, weekday: day, key: newKey},
    ]);
  }
  function handleDeleteTimeslot(keyForDeletion) {
    event.preventDefault();
    setWritingGoals(writingGoals.filter(time => time.key !== keyForDeletion));
  }
  const handelSetGoals = event => {
    event.preventDefault();
    const newGoal = event.target.goal.value;
    setWritingGoals(
      writingGoals.map(entry => {
        return {...entry, writingGoal: newGoal * 1};
      })
    );
  };
  return (
    <>
      <label>How many words do you want to write each day?</label>
      <form onSubmit={handelSetGoals}>
        <input type="number" id="goal"></input>
        <Button type="submit">Set Goal</Button>
      </form>
      <ul>
        {weekday.map(day => {
          return (
            <li key={day.key}>
              {day.weekday}
              {writingGoals.map(timeslot => {
                if (timeslot.weekday === day.numberOfDay) {
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
              <button onClick={() => handleNewTimeslot(day.numberOfDay)}>
                +
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
