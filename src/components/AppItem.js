import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import NoteDeleteButton from "./NoteDeleteButton";
import NoteArchiveButton from "./NoteArchiveButton";
import NoteUnarchiveButton from "./NoteUnarchiveButton";
import { Box, ButtonGroup, GridItem } from "@chakra-ui/react";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <GridItem p="5" my="2" boxShadow="inner" rounded="xl">
      <Box>
        <NoteHeader title={title} createdAt={createdAt} />
        <NoteBody body={body} />
      </Box>
      <Box mt="3">
        <ButtonGroup>
          <NoteDeleteButton id={id} onDelete={onDelete} />
          {archived ? (
            <NoteUnarchiveButton id={id} onUnarchive={onUnarchive} />
          ) : (
            <NoteArchiveButton id={id} onArchive={onArchive} />
          )}
        </ButtonGroup>
      </Box>
    </GridItem>
  );
}

export default NoteItem;
