import React, { Component } from "react";
import { updateClient } from "../../apiR";
import "../../css/clientModal.css";

class ClientModal extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      surname: "",
      country: ""
    };
  }

  editClient = async () => {
    let client = this.props.client;
    client.name = `${this.state.firstName} ${this.state.surname}`;
    client.country = `${this.state.country}`;
    await updateClient(client.id);
  };

  handleInput = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <button className="close-modal-btn" onClick={this.props.closeModal}>
            <i className="fas fa-times" />
          </button>
          <input
            name="firstName"
            type="text"
            placeholder="name"
            onInput={this.handleInput}
          />
          <input
            name="surname"
            type="text"
            placeholder="surname"
            onInput={this.handleInput}
          />
          <input
            name="country"
            type="text"
            placeholder="country"
            onInput={this.handleInput}
          />
        </div>
      </div>
    );
  }
}

export default ClientModal;
