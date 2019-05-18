import React from "react";

const EmailSentBadge = props => {
  return (
    <div className="badge-container">
      <i className="fas fa-envelope icon email-badge" />
      <div className="badge-details">
        <span className="result">{props.checkEmailStatus()}</span>
        <span className="info">Emails Sent</span>
      </div>
    </div>
  );
};

export default EmailSentBadge;
