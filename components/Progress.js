import styled from "styled-components";
import {AllFiles, FileBox} from "./Boxes";

export default function Progress({dailyProgress}) {
  const newestFirst = [...dailyProgress];
  newestFirst.filter((a, b) => b.calenderDay * 1 - a.calenderDay * 1);
  return (
    <AllFiles>
      {dailyProgress.map(day => {
        return (
          <FileBox key={day.calenderDay}>
            <div>
              <Subheadline>Date: </Subheadline>
              <p>{day.calenderDay}</p>
              <Subheadline>Words written: </Subheadline>
              <p>{day.wordsIWroteToday}</p>
              <Subheadline>Goal reached: </Subheadline>
              <p>{day.goalReached}</p>
            </div>
          </FileBox>
        );
      })}
    </AllFiles>
  );
}

const Subheadline = styled.p`
  font-size: 14pt;
  font-weight: 200;
`;
