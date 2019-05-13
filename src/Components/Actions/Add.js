import React, { Component } from "react";
import "../../css/actions.css";

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

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="add-client-container">
        <h4>Add Client</h4>
        <input
          name="firstName"
          className="first-name"
          type="text"
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <input
          name="surname"
          className="last-name"
          type="text"
          onChange={this.handleChange}
          placeholder="Surname"
        />
        <input
          name="country"
          className="country"
          type="text"
          onChange={this.handleChange}
          placeholder="Country"
        />
        <input
          name="owner"
          className="owner"
          type="text"
          onChange={this.handleChange}
          placeholder="Owner"
        />
        <button className="add-client-btn">Add New Client</button>
      </div>
    );
  }
}

export default Add;
