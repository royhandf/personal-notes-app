import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import Input from "../components/layouts/Input";

const Add = () => {
  const navigate = useNavigate();
  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };

  return <Input addNote={onAddNoteHandler} />;
};

export default Add;
