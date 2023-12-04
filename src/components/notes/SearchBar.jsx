import PropTypes from "prop-types";
import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari berdasarkan judul ..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
