import { Box, Button } from "@chakra-ui/react";
import React from "react";

function NoteArchiveButton({ id, onArchive }) {
  return (
    <Button type="button" colorScheme="blue" onClick={() => onArchive(id)}>
      <Box mx="2">Archive</Box>
    </Button>
  );
}

export default NoteArchiveButton;
