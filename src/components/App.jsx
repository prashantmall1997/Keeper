import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(event, inputNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputNote];
    });
    event.preventDefault();
    // console.log(notes);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />

      {notes.map((note, index) => (
        <Note
          deleteNote={deleteNote}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
