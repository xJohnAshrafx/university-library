import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>University Library</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>My Account</li>
          <li>Events</li>
          <li>Help</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
