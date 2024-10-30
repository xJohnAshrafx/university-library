import React, { useState } from 'react';
import './main.css';

function Main() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="library-container">
      {/* AppBar */}
      <header className="appbar">
        <h1>University Library</h1>
        <nav className="nav-links">
          <button onClick={() => console.log('Home')}>Home</button>
          <button onClick={() => console.log('Catalog')}>Catalog</button>
          <button onClick={() => console.log('Research')}>Research</button>
          <button onClick={() => console.log('Contact Us')}>Contact Us</button>
        </nav>
      </header>

      <main className="main-content">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Dropdown</button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#">CS</a>
              <a href="#">Alsun</a>
              <a href="#">Tourism and hotels</a>
            </div>
          )}
        </div> 
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>All rights reserved for Hurghada University 2024</p>
      </footer>
    </div>
  );
}

export default Main;
