import React from "react";
import { getInitialData } from "../utils/data";
import AppInput from "./AppInput";
import AppList from "./AppList";
import AppEmpty from "./AppEmpty";
import { VStack, Box, Heading } from "@chakra-ui/react";
import Swal from "sweetalert2";
import autoBindReact from "auto-bind/react";

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    console.log(this.state.notes.length);
    autoBindReact(this);
  }

  onAddHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date(),
          archived: false,
        },
      ],
    }));
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
        Swal.fire({
          title: "Deleted!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Cancelled!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  }

  onArchiveHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, archive it!",
    }).then((result) => {
      if (result.value) {
        const notes = this.state.notes.map((note) => {
          if (note.id === id) {
            note.archived = true;
          }
          return note;
        });
        this.setState({ notes });
        Swal.fire({
          title: "Archived!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  }

  onUnarchiveHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unarchive it!",
    }).then((result) => {
      if (result.value) {
        const notes = this.state.notes.map((note) => {
          if (note.id === id) {
            note.archived = false;
          }
          return note;
        });
        this.setState({ notes });
        Swal.fire({
          title: "Unarchived!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  }

  render() {
    return (
      <VStack pt="4">
        <AppInput onAdd={this.onAddHandler} />
        <Box w="80%" p="5" boxShadow="lg" rounded="lg">
          <Heading as="h2" size="md" pb="4">
            Active Notes
          </Heading>
          {this.state.notes.length ? (
            <AppList
              notes={this.state.notes.filter((note) => note.archived === false)}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
              keyword={this.props.keyword}
            />
          ) : (
            <AppEmpty />
          )}
        </Box>
        <Box w="80%" p="5" boxShadow="lg" rounded="lg">
          <Heading as="h2" size="md" pb="4">
            Archive Notes
          </Heading>
          {this.state.notes.length ? (
            <AppList
              notes={this.state.notes.filter((note) => note.archived)}
              onDelete={this.onDeleteHandler}
              onUnarchive={this.onUnarchiveHandler}
              keyword={this.props.keyword}
            />
          ) : (
            <AppEmpty />
          )}
        </Box>
      </VStack>
    );
  }
}

export default AppBody;
