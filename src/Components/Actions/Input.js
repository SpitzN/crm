import React, { Component } from "react";

class Input extends Component {
  handleInput = event => {
    this.props.handleInput(event);
    this.updateClientID(event.target.value);
  };

  updateClientID = name => {
    const client = this.props.clients.find(c => c.name === name);
    if (client) {
      return this.props.getClientID(client._id);
    }
  };

  render() {
    const clients = this.props.clients;

    return (
      <div className="input-search-container">
        <input
          list="cl"
          name="clientToUpdate"
          type="text"
          placeholder="Client Name"
          onInput={this.handleInput}
        />
        <datalist id="cl">
          {clients.map(c => (
            <option value={c.name} key={c._id}>
              {c.name}
            </option>
          ))}
        </datalist>
      </div>
    );
  }
}

export default Input;
