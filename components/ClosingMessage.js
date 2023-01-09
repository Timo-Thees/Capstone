import {Overlay, Dialog} from "../styles/PopupStyles";
import {Button} from "../styles/Button";
import styled, {keyframes} from "styled-components";
import Celebration from "../styles/Celebration";

export default function ClosingPopup({
  sessionClose,
  setSessionClose,
  handleChangePage,
  writingGoals,
  dailyProgress,
}) {
  let confettiTime = false;
  function compareProgressAndGoals(writingGoals, dailyProgress, sessionClose) {
    const didIPlanToWriteToday = writingGoals.find(
      writingGoals => writingGoals.weekday === sessionClose.weekday
    );
    const closingDialogePartOne = `Congratulations! This session you wrote ${sessionClose.wordcount} words!`;
    if (didIPlanToWriteToday !== undefined) {
      const wordsIWroteToday =
        dailyProgress[dailyProgress.length - 1].wordsIWroteToday;
      const myGoal = writingGoals[writingGoals.length - 1].writingGoal;
      if (wordsIWroteToday === 0) {
        const closingDialogePartTwo =
          "'Sometimes writing is staring at a blank page for 8 hours and closing the programm again' - Taika Waititi ";
        return [closingDialogePartOne, closingDialogePartTwo];
      }
      if (wordsIWroteToday < myGoal / 4) {
        const closingDialogePartTwo =
          "You did not reach your goal, but you did show up. Thats worth something.";
        return [closingDialogePartOne, closingDialogePartTwo];
      } else if (
        wordsIWroteToday >= myGoal / 4 &&
        wordsIWroteToday < (myGoal / 3) * 2
      ) {
        const closingDialogePartTwo =
          "You made a lot of progress this session.";
        return [closingDialogePartOne, closingDialogePartTwo];
      } else if (
        wordsIWroteToday >= (myGoal / 3) * 2 &&
        wordsIWroteToday < myGoal
      ) {
        const closingDialogePartTwo = "Excelent progress!";
        return [closingDialogePartOne, closingDialogePartTwo];
      } else if (wordsIWroteToday === myGoal) {
        const closingDialogePartTwo =
          "You met your goal today! Excelent progress!";
        confettiTime = true;
        return [closingDialogePartOne, closingDialogePartTwo];
      } else if (wordsIWroteToday > myGoal) {
        const closingDialogePartTwo =
          "Today you wrote even more than you planed. Wow! You are on fire!";
        confettiTime = true;
        return [closingDialogePartOne, closingDialogePartTwo];
      }
    } else {
      const closingDialogePartTwo = "And you didnt even plan to write today...";
      confettiTime = true;
      return [closingDialogePartOne, closingDialogePartTwo];
    }
  }
  function decideLengthOfProgressBar() {
    const progressReportOfToday = dailyProgress.find(
      progressReport => progressReport.calenderDay === sessionClose.calenderDay
    );
    console.log(progressReportOfToday);
    const didIPlanToWriteToday = writingGoals.find(
      writingGoals => writingGoals.weekday === sessionClose.weekday
    );
    console.log(didIPlanToWriteToday);
    if (didIPlanToWriteToday === undefined) {
      return "40vw";
    } else if (progressReportOfToday === undefined) {
      console.error("progressReportOfToday is undefined");
      return "40vw";
    } else {
      const wordsIWroteToday = progressReportOfToday.wordsIWroteToday * 1;
      const myGoal = writingGoals[0].writingGoal * 1;
      const progress = (wordsIWroteToday / myGoal) * 40;
      return {length: `${progress}vw`};
    }
  }
  const lengthOfProgressBar = decideLengthOfProgressBar();

  function handleClick() {
    handleChangePage("my projects");
    setSessionClose({finalWordcount: 0, closingMessage: false});
  }
  const [closingDialogePartOne, closingDialogePartTwo] =
    compareProgressAndGoals(writingGoals, dailyProgress, sessionClose);
  return (
    <Overlay>
      {confettiTime === true ? <Celebration /> : <></>}
      <Dialog>
        <h3>{closingDialogePartOne}</h3>
        <p>{closingDialogePartTwo}</p>
        <ProgressBarBackground>
          <ProgressBar lengthOfProgressBar={lengthOfProgressBar} />
        </ProgressBarBackground>
        <Button onClick={() => handleClick()}>Nice!</Button>
      </Dialog>
    </Overlay>
  );
}
const animationProgressBar = keyframes`
0% {width: 0%;}
25% {width: 25%;}
50% {width: 50%}
75% {width: 75%;}
100% {width: 100%;}
`;

const ProgressBar = styled.div`
  height: 20px;
  width: ${props => props.lengthOfProgressBar.length};
  background-color: green;
  border-radius: 20px;
  animation-name: ${animationProgressBar};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;

const ProgressBarBackground = styled.div`
  height: 35px;
  min-width: 44vw;
  border-radius: 20px;
  padding: 1vh 2vw;
  margin: 1vh 1vw;
  background-color: #dddddd;
`;
