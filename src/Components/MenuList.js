import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuName: ["Home", "Band", "Contact", "Tour", "Ticket"],
    };
  }
  render() {
    const { menu } = this.props;
    return (
      <div>
        <ul className="navbar-nav">
          {menu.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <a className="nav-link active" aria-current="page" href="#">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
