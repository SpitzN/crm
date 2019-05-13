import React, { Component } from "react";
import Input from "./Input";
import { getClientToUpdate } from "../../helpers";

class Update extends Component {
  constructor() {
    super();
    this.state = {
      selectOwner: "Owner",
      selectEmail: "Email Type",
      data: [],
      clientToUpdate: ""
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

  componentDidMount = async () => {
    let data = await getClientToUpdate();
    this.setState({
      data
    });
  };

  render() {
    return (
      <div className="update-client-container">
        <h4>UPDATE</h4>
        <span>Client: </span>
        <Input clients={this.state.data} handleChange={this.handleChange} />
        <div className="transfer-client-container">
          <span>Transfer Ownership to: </span>
          <select
            name="selectOwner"
            className="select-owner"
            value={this.state.selectOwner}
            onChange={this.handleChange}
          >
            <option value="owner">Owner</option>
          </select>
          <button className="transfer-btn">Transfer</button>
        </div>

        <div className="send-client-container">
          <span>Send Email: </span>
          <select
            name="selectEmail"
            className="select-email-type"
            value={this.state.selectEmail}
            onChange={this.handleChange}
          >
            <option value="Email Type">Email Type</option>
            <option value="Email Type">A</option>
            <option value="Email Type">B</option>
            <option value="Email Type">C</option>
            <option value="Email Type">D</option>
          </select>
          <button className="send-btn">Send</button>
        </div>
        <div className="sale-container">
          <span>Declare Sale: </span>
          <button className="sale-btn">Sale</button>
        </div>
      </div>
    );
  }
}

export default Update;
