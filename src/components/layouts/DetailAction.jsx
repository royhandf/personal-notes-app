import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDelete } from "react-icons/md";
import ButtonArchive from "./ButtonArchive";
import Action from "./Action";

const DetailAction = ({ id, archived, isArchived, onDelete }) => {
  return (
    <Action page="detail-page">
      <ButtonArchive id={id} archived={archived} isArchived={isArchived} />
      <button className="action" type="button" onClick={() => onDelete(id)}>
        <MdOutlineDelete />
      </button>
    </Action>
  );
};

DetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default DetailAction;
