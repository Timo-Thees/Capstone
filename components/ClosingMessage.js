import {Overlay, Dialog} from "../styles/PopupStyles";
import {Button} from "./Button";

export default function ClosingPopup({
  sessionClose,
  setSessionClose,
  handleChangePage,
}) {
  function handleClick() {
    handleChangePage("my projects");
    setSessionClose({finalWordcount: 0, closingMessage: false});
  }
  return (
    <Overlay>
      <Dialog>
        <h3>
          Congratulations! This session you wrote {sessionClose.wordcount}{" "}
          words! Good job!
        </h3>
        <Button onClick={() => handleClick()}>Nice!</Button>
      </Dialog>
    </Overlay>
  );
}
