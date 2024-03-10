import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderNote from "../components/HeaderNote";

function NotePage({ match }) {
  let { id: noteId } = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await axios.get(`/notes/${noteId}`);
    let data = await response.data;
    setNote(data);
  };

  let updateNote = async () => {
    await axios.put(`/notes/${noteId}/update`, {
      body: note.body,
    });
  };

  const handleChange = (event) => {
    setNote({
      ...note,
      body: event.target.value,
    });
    updateNote();
  };

  return (
    <div>
      <HeaderNote />
      <div class="px-4">
        <textarea
          defaultValue={note?.body}
          class="w-full h-72 border-none outline-none bg-white resize-none"
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
}

export default NotePage;
