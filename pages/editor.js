export default function Editor() {
  return (
    <div>
      <h1>Write now!</h1>
      <p>The app to help you develop a writing habit</p>
      <form>
        <label for="title">Title</label>
        <input type="text" name="title"></input>
        <textarea></textarea>
        <button>Save</button>
        <button>Load</button>
      </form>
    </div>
  );
}
