import React, { Component } from "react";

class NewClientsBadge extends Component {
  render() {
    return (
      <div className="badge-container">
        <i className="fas fa-chart-line icon newClients-badge" />
        <div className="badge-details">
          <span className="result">{this.props.countNewClientsBadge()} </span>
          <span className="info">
            New {this.props.formatDate(Date.now()).substring(4)} Clients
          </span>
        </div>
      </div>
    );
  }
}

export default NewClientsBadge;
