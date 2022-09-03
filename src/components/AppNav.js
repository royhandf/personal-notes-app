import React from "react";
import AppSearch from "./AppSearch";
import { Box, Flex, Heading } from "@chakra-ui/react";

function AppNav({ onSearch }) {
  return (
    <Flex
      p="4"
      alignItems="center"
      justifyContent="space-between"
      gap="2"
      boxShadow="md"
    >
      <Box pl="2">
        <Heading size="md">Notes App</Heading>
      </Box>
      <Box w="500px">
        <AppSearch onSearch={onSearch} />
      </Box>
    </Flex>
  );
}

export default AppNav;
