import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(id, title, content) {
    setNotes((prevnote) => {
      return [
        ...prevnote,
        <Note
          onDelete={deleteNote}
          key={id}
          id={id}
          title={title}
          content={content}
        />
      ];
    });
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return id === index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes}
      <Footer />
    </div>
  );
}

export default App;
