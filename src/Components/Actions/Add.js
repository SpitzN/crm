import React, { Component } from "react";
import "../../css/actions.css";
import { addClient } from "../../helpers";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      surname: "",
      country: "",
      owner: ""
    };
  }

  handleInput = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  addNewClient = () => {
    const clientFullName = `${this.state.firstName} ${this.state.surname}`;
    const country = this.state.country;
    const owner = this.state.owner;
    addClient(clientFullName, country, owner);
  };

  render() {
    return (
      <div className="add-client-container">
        <h4>Add Client</h4>
        <input
          name="firstName"
          className="first-name"
          type="text"
          onInput={this.handleInput}
          placeholder="First Name"
        />
        <input
          name="surname"
          className="last-name"
          type="text"
          onInput={this.handleInput}
          placeholder="Surname"
        />
        <input
          name="country"
          className="country"
          type="text"
          onInput={this.handleInput}
          placeholder="Country"
        />
        <input
          name="owner"
          className="owner"
          type="text"
          onInput={this.handleInput}
          placeholder="Owner"
        />
        <button className="add-client-btn" onClick={this.addNewClient}>
          Add New Client
        </button>
      </div>
    );
  }
}

export default Add;
