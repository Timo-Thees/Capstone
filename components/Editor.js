import styled from "styled-components";

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
        <Form onSubmit={handleSave}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"></input>
          <textarea
            name="text"
            id="text"
            placeholder="It was a dark and stormy night..."
          ></textarea>
          <button type="submit">Save</button>
          <button>Load</button>
        </Form>
      </div>
    );
  } else {
    return;
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 50px;
  gap: 50px;
`;
