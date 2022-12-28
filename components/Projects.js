import {AllFiles, FileBox} from "./Boxes";
import {useState} from "react";
import DeleteConfirm from "./DeleteConfirm";
import {Button, DangerButton, ButtonBox} from "./Button";

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
    const lastEntry = myProjects[myProjects.length - 1];
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
      <FileBox>
        <h3>Start something new!</h3>
        <Button onClick={() => handleNewFile()}>new document</Button>
      </FileBox>
      {myProjects.map(project => {
        return (
          <FileBox key={project.id}>
            <h3>{project.title}</h3>
            <article>{project.text}</article>
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
