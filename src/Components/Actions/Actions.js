import React, { Component } from "react";
import Add from "./Add";
import "../../css/actions.css";
import Update from "./Update";
import { async } from "q";
import Loading from "../Layout/Loading";

class Actions extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount = async () => {
    this.setState({
      loading: false
    });
  };
  render() {
    const lodaing = this.state.loading;
    return (
      <div>
        {lodaing ? (
          <Loading />
        ) : (
          <div className="actions-container">
            <Update />
            <Add />
          </div>
        )}
      </div>
    );
  }
}

export default Actions;
