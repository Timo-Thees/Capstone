export default function Projects({myProjects, handleChangePage}) {
  return (
    <div>
      <div>
        <h3>Start something new!</h3>
        <button onClick={() => handleChangePage("editor")}>new document</button>
      </div>
      {myProjects.map(project => {
        return (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <article>{project.text}</article>
          </div>
        );
      })}
    </div>
  );
}
