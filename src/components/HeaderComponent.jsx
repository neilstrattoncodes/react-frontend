import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://localhost:3000" className="navbar-brand">
                Flight Management System App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
