import styled from "styled-components";

export default function Projects({
  myProjects,
  handleChangePage,
  setEditorContent,
}) {
  function handleLoadFile(title, text) {
    setEditorContent({title: title, text: text});
    handleChangePage("editor");
  }
  return (
    <AllFiles>
      <FileBox>
        <h3>Start something new!</h3>
        <button onClick={() => handleChangePage("editor")}>new document</button>
      </FileBox>
      {myProjects.map(project => {
        return (
          <FileBox key={project.title}>
            <h3>{project.title}</h3>
            <article>{project.text}</article>
            <button onClick={() => handleLoadFile(project.title, project.text)}>
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
