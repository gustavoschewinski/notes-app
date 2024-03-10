import React from "react";
import { Link } from "react-router-dom";
import { formatRelative } from "date-fns";

function Item({ note }) {
  let getTime = (note) => {
    const now = new Date();
    return formatRelative(note.updated, now);
  };

  let getTitle = (note) => {
    let title = note.body.split("\r")[0];
    if (title.length > 30) {
      return title.slice(0, 30) + "...";
    }
    return title;
  };

  return (
    <div class="flex items-center h-[55px] px-4 hover:bg-gray-100 border-t-2 rounded-xl transition-all">
      <Link to={`/note/${note.id}`}>
        <h2>{getTitle(note)}</h2>
        <div>
          <p class="text-[11px] text-gray-500">
            Last updated at {getTime(note)}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Item;
