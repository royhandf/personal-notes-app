import PropTypes from "prop-types";

const Action = ({ page, children }) => {
  return <div className={`${page}__action`}>{children}</div>;
};

Action.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Action;
