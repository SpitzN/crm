import React, { Component } from "react";
import Client from "./Client.js";
import ClientsHeader from "./ClientsHeader.js";
import { getDataFromDB } from "../../helpers";

class Clients extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: "",
      select: "name"
    };
  }

  handleInput = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  getClient = c => <Client key={c._id} client={c} />;

  filterClientList = () => {
    const copyData = [...this.state.data];
    const filtered = copyData.filter(c =>
      c[this.state.select]
        .toUpperCase()
        .toLowerCase()
        .includes(this.state.search)
    );
    return filtered.map(c => <Client key={c._id} client={c} />);
  };

  componentDidMount = () => {
    getDataFromDB().then(data => {
      this.setState({
        data
      });
    });
  };

  render() {
    return (
      <div className="clients-container">
        <div className="clients-filter-bar">
          <input
            name="search"
            id="search-input"
            value={this.state.search}
            onChange={this.handleInput}
          />
          <select
            name="select"
            id="select-input"
            value={this.state.select}
            onChange={this.handleInput}
          >
            <option value="name">Name</option>
            <option value="country">Country</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        <ClientsHeader />
        {this.state.search === ""
          ? this.state.data.map(c => this.getClient(c))
          : this.filterClientList()}
      </div>
    );
  }
}

export default Clients;
