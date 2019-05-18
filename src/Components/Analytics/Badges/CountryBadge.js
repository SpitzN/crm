import React from "react";

const CountryBadge = props => {
  return (
    <div className="badge-container">
      <i className="fas fa-globe-americas icon country-badge" />
      <div className="badge-details">
        <span className="result">{props.countryBreakdownBySales()}</span>
        <span className="info">Is the Hottest</span>
      </div>
    </div>
  );
};

export default CountryBadge;
