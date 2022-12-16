import {Overlay, Dialog, ButtonBox} from "../styles/PopupStyles";

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
          <button onClick={() => confirmDeletion(idForDeletion)}>Yes</button>
          <button onClick={() => setDeletePopup(false)}>Abort</button>
        </ButtonBox>
      </Dialog>
    </Overlay>
  );
}
