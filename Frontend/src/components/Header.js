import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const Header = ({ navigate }) => {
  let [id, setId] = useState(null);

  let createNewNote = async () => {
    let response = await axios.post(`/notes/create`);
    let data = await response.data;
    setId(data?.id);
  };

  useEffect(() => {
    if (id) {
      navigate(`/note/${id}`);
    }
  }, [id]);

  const handleNewNote = () => {
    createNewNote();
  };

  return (
    <div>
      <div class="flex justify-between items-center backdrop-blur-0 bg-gray-200 rounded-t-sm rounded-b-xl mb-5">
        <div>
          <h1 class="text-4xl font-bold p-4">Notes</h1>
        </div>
        <div class="pr-4">
          <Button variant="outline" onClick={handleNewNote}>
            <AddIcon />
            <span class="ml-2">New Note</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
