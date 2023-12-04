import React, { Component } from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onInputHandler(event) {
    this.setState({ body: event.target.innerHTML });
  }

  onSubmitHandler() {
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            type="text"
            className="add-new-page__input__title"
            placeholder="Judul"
            value={this.state.title}
            onChange={(e) => this.onTitleChange(e)}
          />
          <div
            className="add-new-page__input__body"
            contentEditable
            data-placeholder="Tulis catatan."
            onInput={(e) => this.onInputHandler(e)}
          ></div>
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title="Simpan"
            onClick={this.onSubmitHandler}
          >
            <FiCheck />
          </button>
        </div>
      </section>
    );
  }
}

Input.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default Input;
