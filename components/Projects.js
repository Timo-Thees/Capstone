import styled from "styled-components";

export default function Projects({
  myProjects,
  handleChangePage,
  setEditorContent,
}) {
  function handleLoadFile(title, text, id) {
    setEditorContent({title: title, text: text, id: id});
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
  return (
    <AllFiles>
      <FileBox>
        <h3>Start something new!</h3>
        <button onClick={() => handleNewFile()}>new document</button>
      </FileBox>
      {myProjects.map(project => {
        return (
          <FileBox key={project.id}>
            <h3>{project.title}</h3>
            <article>{project.text}</article>
            <button
              onClick={() =>
                handleLoadFile(project.title, project.text, project.id)
              }
            >
              continue
            </button>
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
  background-color: salmon;
  padding: 2vh 2vw;
  gap: 2vh;
`;

const FileBox = styled.div`
  background-color: lightblue;
  padding: 2vh 2vw;
`;
