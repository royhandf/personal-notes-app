import React, { Component } from "react";
import PropTypes from "prop-types";
import { getActiveNotes, searchNotes } from "../utils/local-data";
import SearchBar from "../components/notes/SearchBar";
import HomeAction from "../components/layouts/HomeAction";
import ItemList from "../components/notes/ItemList";
import { useSearchParams } from "react-router-dom";

const HomeWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("keyword") || "";
  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return <Home onSearch={changeSearchParams} defaultKeyword={title} />;
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
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
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <section className="search-bar">
          <SearchBar onSearch={this.onSearch} />
        </section>
        <ItemList notes={notes} />
        <HomeAction />
      </section>
    );
  }
}

Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default HomeWrapper;
