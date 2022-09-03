import { Input } from "@chakra-ui/react";
import React from "react";

function AppSearch({ onSearch }) {
  return (
    <Input
      type="search"
      placeholder="Search Note"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default AppSearch;
