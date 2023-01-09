import {
  AllFiles,
  FileBox,
  TextPreview,
  Fade,
  SpecialBox,
} from "../styles/Boxes";
import {useState} from "react";
import DeleteConfirm from "./DeleteConfirm";
import {Button, DangerButton, ButtonBox, ActiveButton} from "../styles/Button";

export default function Projects({
  myProjects,
  handleChangePage,
  setEditorContent,
  setMyProjects,
}) {
  const [deletePopup, setDeletePopup] = useState(false);
  const [idForDeletion, setIdForDeletion] = useState();
  function handleLoadFile(title, text, id, wordcount) {
    setEditorContent({title: title, text: text, id: id, wordcount: wordcount});
    handleChangePage("editor");
  }
  function handleNewFile() {
    const coppyArray = [...myProjects];
    const sortetById = coppyArray.sort((a, b) => a.id - b.id);
    const lastEntry = sortetById[sortetById.length - 1];
    function testEntry(entryToTest) {
      if (entryToTest === undefined) {
        return 0;
      } else {
        return entryToTest.id + 1;
      }
    }
    const newId = testEntry(lastEntry);
    setEditorContent({title: "", text: "", id: newId, wordcount: 0});
    handleChangePage("editor");
  }
  function handleDeletion(entryYouWantDeleted) {
    setIdForDeletion(entryYouWantDeleted);
    setDeletePopup(true);
  }
  return (
    <AllFiles>
      {deletePopup && (
        <DeleteConfirm
          setDeletePopup={setDeletePopup}
          idForDeletion={idForDeletion}
          myProjects={myProjects}
          setMyProjects={setMyProjects}
        />
      )}
      <SpecialBox>
        <h3>Start something new!</h3>
        <ActiveButton onClick={() => handleNewFile()}>
          new document
        </ActiveButton>
      </SpecialBox>
      {myProjects.map(project => {
        return (
          <FileBox key={project.id}>
            <h3>{project.title}</h3>
            <Fade>
              <TextPreview>{project.text}</TextPreview>
            </Fade>
            <ButtonBox>
              <Button
                onClick={() =>
                  handleLoadFile(
                    project.title,
                    project.text,
                    project.id,
                    project.wordcount
                  )
                }
              >
                continue
              </Button>
              <DangerButton onClick={() => handleDeletion(project.id)}>
                delete
              </DangerButton>
            </ButtonBox>
          </FileBox>
        );
      })}
    </AllFiles>
  );
}
