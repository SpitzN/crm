import React, { Component } from "react";
import Input from "./Input";
import { getClients, updateClient } from "../../helpers";

class Update extends Component {
  constructor() {
    super();
    this.state = {
      client: [],
      selectOwner: "",
      selectEmail: "",
      clientIdToUpdate: ""
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

  getClientID = clientIdToUpdate => this.setState({ clientIdToUpdate });

  changeOwner = () =>
    updateClient(this.state.clientIdToUpdate, `owner`, this.state.selectOwner);

  sendEmail = () =>
    updateClient(
      this.state.clientIdToUpdate,
      `emailType`,
      this.state.selectEmail
    );

  // declareSale = () => updateClient(this.state.clientIdToUpdate, `sold`);

  componentDidMount = async () => {
    const client = await getClients();
    this.setState({
      client
    });
  };

  render() {
    const ownerList = [...new Set(this.state.client.map(c => c.owner))];

    return (
      <div className="update-client-container">
        <h4>UPDATE</h4>
        <span>Client: </span>
        <Input
          clients={this.state.client}
          handleInput={this.handleInput}
          getClientID={this.getClientID}
        />
        <div className="transfer-client-container">
          <span>Transfer Ownership to: </span>
          <select
            name="selectOwner"
            className="select-owner"
            value={this.state.selectOwner}
            onChange={this.handleInput}
          >
            {ownerList.map(c => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
          <button className="transfer-btn" onClick={this.changeOwner}>
            Transfer
          </button>
        </div>

        <div className="send-client-container">
          <span>Send Email: </span>
          <select
            name="selectEmail"
            className="select-email-type"
            value={this.state.selectEmail}
            onChange={this.handleInput}
            placeholder="Email Type"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <button className="send-btn" onClick={this.sendEmail}>
            Send
          </button>
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
