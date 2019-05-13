import React, { Component } from "react";

class Input extends Component {
  handleChange = event => {
    this.props.handleChange(event);
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
          onChange={this.handleChange}
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
