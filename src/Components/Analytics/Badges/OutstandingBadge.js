import React from "react";

const OutstandingBadge = props => {
  return (
    <div className="badge-container">
      <i className="fas fa-user icon outstanding-badge" />
      <div className="badge-details">
        <span className="result">{props.outstandingClients()}</span>
        <span className="info">Outstanding Clients</span>
      </div>
    </div>
  );
};

export default OutstandingBadge;
