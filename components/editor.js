export default function Editor({saveText}) {
  //   function onSave(values) {
  //     const title = values.title;
  //     const text = values.text;
  //     saveText(title, text);
  //     console.log();
  //  }
  const handleSave = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    saveText(title, text);
  };
  // const handleLoad = () => {
  //   loadText("Beispiel");
  //};
  return (
    <div>
      <h1>Write now!</h1>
      <p>The app to help you develop a writing habit</p>
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
}
