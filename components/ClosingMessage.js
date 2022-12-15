import {Overlay, Dialog} from "../styles/PopupStyles";
import {Button} from "./Button";

export default function ClosingPopup({
  finalCount,
  setFinalCount,
  handleChangePage,
}) {
  function handleClick() {
    handleChangePage("progress");
    setFinalCount({finalWordcount: 1000000, closingMessage: false});
  }
  return (
    <Overlay>
      <Dialog>
        <h3>
          Congratulations! This session you wrote {finalCount.finalWordcount}{" "}
          words! Good job!
        </h3>
        <Button onClick={() => handleClick()}>Nice!</Button>
      </Dialog>
    </Overlay>
  );
}
