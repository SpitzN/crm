import React from "react";

const OutstandingBadge = (props) => {
  return (
      <div className='outstanding-badge'>
      <span>{props.outstandingClients()}</span>
      </div>
  )
};

export default OutstandingBadge;
