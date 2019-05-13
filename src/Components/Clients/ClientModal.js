import React from "react";

const ClientModal = () => {
  return (
    <div className="client-modal">
      <div className="modl_inner">
        <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>x</button>
      </div>
    </div>
  );
};

export default ClientModal;
