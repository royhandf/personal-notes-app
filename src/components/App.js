import React from "react";
import autoBindReact from "auto-bind/react";
import AppNav from "./AppNav";
import AppBody from "./AppBody";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
    autoBindReact(this);
  }

  onSearchHandler(keyword) {
    this.setState({ keyword });
  }

  render() {
    return (
      <>
        <AppNav onSearch={this.onSearchHandler} />
        <AppBody keyword={this.state.keyword} />
      </>
    );
  }
}

export default App;
