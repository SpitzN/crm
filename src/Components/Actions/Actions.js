import React, { Component } from "react";
import Add from "./Add";
import "../../css/actions.css";
import Update from "./Update";

class Actions extends Component {
  render() {
    return (
      <div className="actions-container">
        <Update />
        <Add />
      </div>
    );
  }
}

export default Actions;
