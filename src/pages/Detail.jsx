import PropTypes from "prop-types";
import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DetailAction from "../components/layouts/DetailAction";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import NotFound from "./NotFound";
import Body from "../components/layouts/Body";

const DetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return <Detail id={id} navigate={navigate} />;
};

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
    this.isNoteArchivedHandler = this.isNoteArchivedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  isNoteArchivedHandler(id) {
    if (this.state.note.archived) {
      unarchiveNote(id);
      this.props.navigate("/");
    } else {
      archiveNote(id);
      this.props.navigate("/");
    }
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  render() {
    if (!this.state.note) return <NotFound />;

    return (
      <section className="detail-page">
        <Body note={this.state.note} />
        <DetailAction
          id={this.props.id}
          archived={this.state.note.archived}
          isArchived={this.isNoteArchivedHandler}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

Detail.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func.isRequired,
};

export default DetailWrapper;
