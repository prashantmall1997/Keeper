import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setInputNote((prevVlaue) => {
      return {
        ...prevVlaue,
        [name]: value,
      };
    });
    // console.log(inputNote);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={inputNote.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addNote(event, inputNote);
            setInputNote({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
