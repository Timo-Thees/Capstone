export default function Editor({saveText, page}) {
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    saveText(title, text);
  };
  if (page === "editor") {
    return (
      <div>
        <form onSubmit={handleSave}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"></input>
          <textarea
            name="text"
            id="text"
            placeholder="It was a dark and stormy night..."
          ></textarea>
          <button type="submit">Save</button>
          <button>Load</button>
        </form>
      </div>
    );
  } else {
    return;
  }
}
