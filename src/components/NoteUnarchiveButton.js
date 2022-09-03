import { Box, Button } from "@chakra-ui/react";
import React from "react";

function NoteUnarchiveButton({ id, onUnarchive }) {
  return (
    <Button type="button" colorScheme="cyan" onClick={() => onUnarchive(id)}>
      <Box mx="2">Unarchive</Box>
    </Button>
  );
}

export default NoteUnarchiveButton;
