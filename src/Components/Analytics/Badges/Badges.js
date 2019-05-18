import React, { Component } from "react";
import NewClientsBadge from "./NewClientsBadge";
import EmailSentBadge from "./EmailSentBadge";
import OutstandingBadge from "./OutstandingBadge";
import CountryBadge from "./CountryBadge";
import "../../../css/badges.css";

class Badges extends Component {
  formatDate = date => {
    date = new Date(date);
    const contactMonth = date.toLocaleString("en-us", { month: "long" });
    const contactYear = date.getFullYear();

    return `${contactYear}${contactMonth}`;
  };

  countNewClientsBadge = () => {
    let clientsList = [...this.props.clients];
    let filteredList = clientsList.filter(
      c => this.formatDate(c.firstContact) === this.formatDate(Date.now())
    );
    return filteredList.length;
  };

  checkEmailStatus = () => {
    let emailSent = this.props.clients.filter(c => c.emailType);
    return emailSent.length;
  };

  outstandingClients = () => {
    let noSale = this.props.clients.filter(c => !c.sold);
    return noSale.length;
  };

  countryBreakdownBySales = () => {
    let clientsList = [...this.props.clients];
    let countryBreakdown = {};

    clientsList.forEach(c => {
      countryBreakdown[c.country] = 0;
    });

    clientsList.forEach(c => {
      if (c.sold) countryBreakdown[c.country]++;
    });

    let countries = Object.keys(countryBreakdown);
    let maxSales = 0;
    let hottestCountry = "";

    countries.forEach(c => {
      if (countryBreakdown[c] > maxSales) {
        maxSales = countryBreakdown[c];
        hottestCountry = c;
      }
    });
    return hottestCountry;
  };

  render() {
    return (
      <div className="badges-container">
        <NewClientsBadge
          formatDate={this.formatDate}
          countNewClientsBadge={this.countNewClientsBadge}
        />
        <EmailSentBadge checkEmailStatus={this.checkEmailStatus} />
        <OutstandingBadge outstandingClients={this.outstandingClients} />
        <CountryBadge countryBreakdownBySales={this.countryBreakdownBySales} />
      </div>
    );
  }
}

export default Badges;
