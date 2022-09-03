import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function NoteDeleteButton({ id, onDelete }) {
  return (
    <ButtonGroup>
      <Button type="button" colorScheme="red" onClick={() => onDelete(id)}>
        <DeleteIcon />
        <Box mx="2">Delete</Box>
      </Button>
    </ButtonGroup>
  );
}

export default NoteDeleteButton;
