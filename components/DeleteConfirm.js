import {Overlay, Dialog} from "../styles/PopupStyles";
import {Button, DangerButton, ButtonBox} from "../styles/Button";

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
          <DangerButton onClick={() => confirmDeletion(idForDeletion)}>
            Yes, delete
          </DangerButton>
          <Button onClick={() => setDeletePopup(false)}>No, keep</Button>
        </ButtonBox>
      </Dialog>
    </Overlay>
  );
}
