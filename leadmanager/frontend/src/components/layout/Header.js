import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Lead Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span className="navbar-text">Navbar text with an inline element</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
