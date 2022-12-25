import {Overlay, Dialog} from "../styles/PopupStyles";
import {Button} from "./Button";

export default function ClosingPopup({
  sessionClose,
  setSessionClose,
  handleChangePage,
  writingGoals,
  dailyProgress,
}) {
  function compareProgressAndGoals(writingGoals, dailyProgress, sessionClose) {
    const didIPlanToWriteToday = writingGoals.find(
      writingGoals => writingGoals.weekday === dailyProgress.weekday
    );
    const closingDialogePartOne = `Congratulations! This session you wrote ${sessionClose.wordcount} words!`;
    if (didIPlanToWriteToday !== undefined) {
      const wordsIWroteToday =
        dailyProgress[dailyProgress.length - 1].wordsIWroteToday;
      const myGoal = writingGoals[writingGoals.length - 1].writingGoal;
      console.log(dailyProgress[dailyProgress.length - 1].wordsIWroteToday);
      if (wordsIWroteToday < myGoal / 4) {
        const closingDialogePartTwo =
          "You did not reach your goal, but you made an effort, and that counts";
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
        return [closingDialogePartOne, closingDialogePartTwo];
      } else if (wordsIWroteToday > myGoal) {
        const closingDialogePartTwo =
          "Today you wrote even more than you planed. Wow! You are on fire!";
        return [closingDialogePartOne, closingDialogePartTwo];
      }
    } else {
      const closingDialogePartTwo = "And you didnt even plan to write today...";
      return [closingDialogePartOne, closingDialogePartTwo];
    }
  }
  function handleClick() {
    handleChangePage("my projects");
    setSessionClose({finalWordcount: 0, closingMessage: false});
  }
  const [closingDialogePartOne, closingDialogePartTwo] =
    compareProgressAndGoals(writingGoals, dailyProgress, sessionClose);
  return (
    <Overlay>
      <Dialog>
        <h3>{closingDialogePartOne}</h3>
        <p>{closingDialogePartTwo}</p>
        <Button onClick={() => handleClick()}>Nice!</Button>
      </Dialog>
    </Overlay>
  );
}
