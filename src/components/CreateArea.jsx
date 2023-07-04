import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  function handleTitle(event) {
    const titleValue = event.target.value;
    console.log(titleValue);
    setTitle(titleValue);
  }

  function handleContent(event) {
    const contentValue = event.target.value;
    console.log(contentValue);
    setContent(contentValue);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button
          type="button"
          onClick={() => {
            props.addNote(id, title, content);
            setTitle("");
            setContent("");
            setId(id + 1);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
