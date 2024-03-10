import React from "react";
import { Button } from "../components/ui/button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderNote = () => {
  let navigate = useNavigate();
  let { id: noteId } = useParams();
  
  let deleteNote = async () => {
    await axios.delete(`/notes/${noteId}/delete`);
  };

  const handleClick = () => {
    deleteNote();
    navigate("/");
  };

  return (
    <div>
      <div class="flex justify-between items-center backdrop-blur-0 bg-gray-200 rounded-t-sm rounded-b-xl mb-5">
        {/* <div>
          <h1 class="text-1xl font-bold p-4">Notes</h1>
        </div> */}
        <div class="p-4">
          <Link to="/">
            <Button variant="ghost">
              <ArrowBackIosIcon fontSize="medium" />
            </Button>
          </Link>
        </div>
        <div class="pr-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">
                <MoreVertIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleClick}>Delete</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default HeaderNote;
