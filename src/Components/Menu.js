import React, { Component } from "react";
import MenuList from "./MenuList";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHeader: ["Home", "Band", "Contact", "Tour"],
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <MenuList menu={this.state.menuHeader} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
