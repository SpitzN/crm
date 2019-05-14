import React from "react";

const EmailSentBadge = props => {
  return (
    <div className="emails-sent-badge">
      <span>{props.checkEmailStatus()}</span>
      <span>Emails Sent</span>
    </div>
  );
};

export default EmailSentBadge;
