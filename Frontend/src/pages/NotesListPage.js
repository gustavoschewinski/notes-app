import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const NotesListPage = () => {
  let navigate = useNavigate();

  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await axios.get(`/notes/`);
    let data = await response.data;
    setNotes(data);
  };

  return (
    <div class="">
      <Header navigate={navigate} />
      {notes.map((note, index) => (
        <Item key={index} note={note} />
      ))}
    </div>
  );
};

export default NotesListPage;
