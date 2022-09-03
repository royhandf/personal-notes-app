import { Text } from "@chakra-ui/react";
import React from "react";

function NoteBody({ body }) {
  return (
    <Text my="3" color="gray.800" minHeight="200px">
      {body}
    </Text>
  );
}

export default NoteBody;
