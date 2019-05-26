import React, { Component } from "react";
import "../../css/clients.css";
import ClientModal from "./ClientModal";

class Client extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  getFormattedDate = date => {
    date = new Date(date);
    let day = date.getDate() - 1;
    let month = date.toLocaleString("en-us", { month: "long" });
    let year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    let client = this.props.client;

    let fullName = client.name.split(" "),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1],
      dateOfContact = this.getFormattedDate(client.firstContact),
      country = client.country,
      emailType = client.emailType,
      sold = client.sold,
      owner = client.owner,
      isSoldClass = sold ? "fas fa-check" : "none";

    return (
      <div className="row">
        {this.state.showModal ? (
          <ClientModal
            closeModal={this.toggleModal}
            name={firstName}
            surname={lastName}
            country={country}
            client={client}
          />
        ) : (
          <div className="client-card" onClick={this.toggleModal}>
            <span className="first-name">{firstName}</span>
            <span className="last-name">{lastName}</span>
            <span className="country">{country}</span>
            <span className="first-contact">{dateOfContact}</span>
            <span className="email-type">{emailType}</span>
            <span className="sold">
              {sold ? <i className={isSoldClass} /> : "-"}
            </span>
            <span className="owner">{owner}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Client;
