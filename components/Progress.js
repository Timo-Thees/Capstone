import {AllFiles, FileBox} from "./Boxes";

export default function Progress({dailyProgress}) {
  const newestFirst = [...dailyProgress];
  newestFirst.filter((a, b) => b.calenderDay * 1 - a.calenderDay * 1);
  return (
    <AllFiles>
      {dailyProgress.map(day => {
        return (
          <FileBox key={day.calenderDay}>
            <p>
              Date: {day.calenderDay}. Words written: {day.wordsIWroteToday}.
              Goal reached: {day.goalReached}
            </p>
          </FileBox>
        );
      })}
    </AllFiles>
  );
}
