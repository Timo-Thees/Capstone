import Timeslot from "./Timeslot";
import {SmallButton, ActiveButton} from "./Button";
import {AllFiles, FileBox, SpecialBox} from "./Boxes";
import styled from "styled-components";

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
    const coppyArray = [...writingGoals];
    const sortByKey = coppyArray.sort((a, b) => a.key - b.key);
    const lastEntry = sortByKey[sortByKey.length - 1];
    const newKey = lastEntry.key + 1;
    const writingGoal = lastEntry.writingGoal;
    setWritingGoals([
      ...writingGoals,
      {
        writingGoal: writingGoal,
        weekday: day,
        key: newKey,
        startingTime: "",
        endingTime: "",
      },
    ]);
  }
  function handleUpdateTimeslot(key) {
    event.preventDefault();
    const startingTime = event.target.startingTime.value;
    const endingTime = event.target.endingTime.value;
    const findGoal = writingGoals.find(entry => entry.key === key);
    const updateGoal = {
      ...findGoal,
      startingTime: startingTime,
      endingTime: endingTime,
    };
    const removeOldEntry = writingGoals.filter(entry => entry.key !== key);
    setWritingGoals([...removeOldEntry, updateGoal]);
  }
  function handleDeleteTimeslot(keyForDeletion) {
    event.preventDefault();
    setWritingGoals(writingGoals.filter(time => time.key !== keyForDeletion));
  }
  function handleChangeWritingTime(keyForDeletion) {
    const findTimeslot = writingGoals.find(
      timeslot => timeslot.key === keyForDeletion
    );
    const updateTimeslot = {...findTimeslot, startingTime: "", endingTime: ""};
    const removeOldEntry = writingGoals.filter(
      time => time.key !== keyForDeletion
    );
    setWritingGoals([...removeOldEntry, updateTimeslot]);
  }
  const handelSetGoals = event => {
    event.preventDefault();
    const newGoal = event.target.goal.value;
    setWritingGoals(
      writingGoals.map(entry => {
        return {...entry, writingGoal: newGoal * 1};
      })
    );
    event.target.goal.value = "";
  };
  const writingGoal = writingGoals[0].writingGoal;

  return (
    <>
      <AllFiles>
        <SpecialBox>
          <SetGoalsHeadline>
            How many words do you want to write each day?
          </SetGoalsHeadline>
          <form onSubmit={handelSetGoals}>
            <input type="number" id="goal" placeholder={writingGoal}></input>
            <br />
            <ActiveButton type="submit">Set Goal</ActiveButton>
          </form>
        </SpecialBox>
        <AllFiles>
          {weekday.map(day => {
            return (
              <FileBox key={day.numberOfDay}>
                <Weekday>{day.weekday}</Weekday>
                {writingGoals.map(timeslot => {
                  if (timeslot.weekday === day.numberOfDay) {
                    return (
                      <Timeslot
                        key={timeslot.key}
                        handleDeleteTimeslot={handleDeleteTimeslot}
                        keyForDeletion={timeslot.key}
                        day={timeslot.weekday}
                        handleUpdateTimeslot={handleUpdateTimeslot}
                        startingTime={timeslot.startingTime}
                        endingTime={timeslot.endingTime}
                        handleChangeWritingTime={handleChangeWritingTime}
                      />
                    );
                  }
                })}
                <SmallButton onClick={() => handleNewTimeslot(day.numberOfDay)}>
                  +
                </SmallButton>
              </FileBox>
            );
          })}
        </AllFiles>
      </AllFiles>
    </>
  );
}

const Weekday = styled.p`
  font-weight: 300;
  margin-top: -1vh;
  margin-bottom: 1vh;
`;

const SetGoalsHeadline = styled.label`
  font-size: 14pt;
  font-weight: 500;
`;
