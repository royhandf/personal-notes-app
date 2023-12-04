import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import ItemList from "../components/notes/ItemList";
import SearchBar from "../components/notes/SearchBar";
import { getArchivedNotes, searchNotes } from "../utils/local-data";
import PropTypes from "prop-types";

function ArchiveWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }
  return <Archive onSearch={changeSearchParams} defaultKeyword={title} />;
}

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(keyword) {
    this.setState({ keyword });
    this.props.onSearch(keyword);
  }
  render() {
    const notes = searchNotes(this.state.notes, this.state.keyword);
    return (
      <section className="archives-page">
        <h2>Catatan Archive</h2>
        <section className="search-bar">
          <SearchBar onSearch={this.onSearch} />
        </section>
        <ItemList notes={notes} />
      </section>
    );
  }
}

Archive.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default ArchiveWrapper;
