import React, { Component } from "react";

class NewClientsBadge extends Component {
  render() {
    return (
      <div className="new-client-count-badge">
        <span>{this.props.countNewClientsBadge()}</span>
        <span>{this.props.formatDate(Date.now()).substring(4)}</span>
      </div>
    );
  }
}

export default NewClientsBadge;
