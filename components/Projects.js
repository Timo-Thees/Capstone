import styled from "styled-components";
import {useState} from "react";
import DeleteConfirm from "./DeleteConfirm";
import {Button, ButtonContainer, ButtonDanger} from "./Button";

export default function Projects({
  myProjects,
  handleChangePage,
  setEditorContent,
  setMyProjects = {setMyProjects},
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
            <TextPreview>{project.text}</TextPreview>
            <ButtonContainer>
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
              <ButtonDanger onClick={() => handleDeletion(project.id)}>
                delete
              </ButtonDanger>
            </ButtonContainer>
          </FileBox>
        );
      })}
    </AllFiles>
  );
}

const AllFiles = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  grid-auto-flow: row dense;
  gap: 3%;
`;

const FileBox = styled.div`
  background-color: #b2d7df;
  border-radius: 20px;
  padding: 2vh 2vw;
  max-width: 80vw;
  max-height: 40vh;
`;

const TextPreview = styled.article`
  max-height: 20vh;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-bottom: 3vh;
`;
