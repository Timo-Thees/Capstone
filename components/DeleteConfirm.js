import {Overlay, Dialog, ButtonBox} from "../styles/PopupStyles";
import {Button, ButtonContainer, ButtonDanger} from "./Button";

export default function DeleteConfirm({
  setDeletePopup,
  idForDeletion,
  myProjects,
  setMyProjects,
}) {
  function confirmDeletion(idForDeletion) {
    setMyProjects(myProjects.filter(project => project.id !== idForDeletion));
    setDeletePopup(false);
  }
  return (
    <Overlay>
      <Dialog>
        <h2>Do you really want to delete this story?</h2>
        <ButtonBox>
          <ButtonContainer>
            <ButtonDanger onClick={() => confirmDeletion(idForDeletion)}>
              Yes
            </ButtonDanger>
            <Button onClick={() => setDeletePopup(false)}>Abort</Button>
          </ButtonContainer>
        </ButtonBox>
      </Dialog>
    </Overlay>
  );
}
