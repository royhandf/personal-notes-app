import { Grid } from "@chakra-ui/react";
import React from "react";
import AppItem from "./AppItem";

function AppList({ notes, onDelete, onArchive, onUnarchive, keyword }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="3">
      {notes
        .filter((note) =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        )
        .map((note) => (
          <AppItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            {...note}
          />
        ))}
    </Grid>
  );
}

export default AppList;
