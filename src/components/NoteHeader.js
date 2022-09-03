import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { showFormattedDate } from "../utils/data";

function NoteHeader({ title, createdAt }) {
  return (
    <>
      <Heading as="h3" mb="1.5" fontSize="20px" fontWeight="600">
        {title}
      </Heading>
      <Text color="gray.500" fontSize="sm">
        {showFormattedDate(createdAt)}
      </Text>
    </>
  );
}

export default NoteHeader;
