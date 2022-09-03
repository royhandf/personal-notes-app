import { Heading, Input, Text, Textarea, Button, Box } from "@chakra-ui/react";
import React from "react";

class AppInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.maxLength = 50;

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler =
      this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    const inputValue = e.target.value.slice(0, this.maxLength);
    this.setState((prevState) => ({
      ...prevState,
      title: inputValue,
      inputLength: inputValue.length,
    }));
  }

  onContentChangeEventHandler(e) {
    this.setState((prevState) => ({
      ...prevState,
      body: e.target.value,
    }));
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.onAdd(this.state);
  }

  // onSubmitEventHandler(e) {
  //   e.preventDefault();
  //   if (this.state.title.length && this.state.body.length) {
  //     this.props.onAdd(this.state);
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Note created!",
  //       icon: "success",
  //       confirmButtonText: "Ok",
  //     });
  //   } else {
  //     Swal.fire({
  //       title: "Oops...",
  //       text: "Title and Content are required!",
  //       icon: "error",
  //       confirmButtonText: "Ok",
  //     });
  //   }
  // }

  render() {
    return (
      <Box w="70%" p="5" mb="6" boxShadow="lg" rounded="lg">
        <Heading as="h2" size="md">
          Add New Note
        </Heading>
        <form onSubmit={this.onSubmitEventHandler}>
          <Text style={{ color: "grey" }} textAlign="right" mb="2.5">
            Sisa karakter:{" "}
            {this.state.inputLength
              ? this.maxLength - this.state.inputLength
              : this.maxLength}
          </Text>
          <Input
            mb="2.5"
            type="text"
            placeholder="Title Note"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <Textarea
            mb="2.5"
            type="text"
            placeholder="Content Note"
            spellCheck="false"
            defaultValue={this.state.body}
            onChange={this.onContentChangeEventHandler}
          />
          <Button type="submit" w="100%">
            Create
          </Button>
        </form>
      </Box>
    );
  }
}

export default AppInput;
