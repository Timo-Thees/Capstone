import {TitleField} from "./Textfields";

export default function NameTaken({nameTakenContent, saveProjects, setPage}) {
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = nameTakenContent.text;
    const id = nameTakenContent.id;
    setPage("my projects");
    saveProjects(title, text, id);
  };
  return (
    <div>
      <h1>
        A file with that name does allready exist. Please choose a different
        name.
      </h1>
      <form onSubmit={handleSave}>
        <TitleField
          type="text"
          name="title"
          id="title"
          placeholder="New Story"
          defaultValue={nameTakenContent.title}
        ></TitleField>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
