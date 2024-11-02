import React, { useState } from 'react';
import './main.css';

function Main() {
  const [selectedSection, setSelectedSection] = useState(null);

  const books = {
    CS: ['Introduction to Algorithms', 'Clean Code', 'The Pragmatic Programmer'],
    Alsun: ['Linguistics 101', 'Introduction to Translation', 'Modern Languages'],
    Tourism: ['History of Tourism', 'Travel Guide to Egypt', 'Hotel Management']
  };

  const handleSectionClick = (section) => {
    setSelectedSection(selectedSection === section ? null : section);
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
        {/* Section Buttons with Book Lists */}
        <div className="section-buttons">
          <button className="section-button" onClick={() => handleSectionClick('CS')}>CS</button>
          {selectedSection === 'CS' && (
            <div className="books-list">
              <h2>CS Books</h2>
              <ul>
                {books.CS.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="section-button" onClick={() => handleSectionClick('Alsun')}>Alsun</button>
          {selectedSection === 'Alsun' && (
            <div className="books-list">
              <h2>Alsun Books</h2>
              <ul>
                {books.Alsun.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="section-button" onClick={() => handleSectionClick('Tourism')}>Tourism and Hotels</button>
          {selectedSection === 'Tourism' && (
            <div className="books-list">
              <h2>Tourism and Hotels Books</h2>
              <ul>
                {books.Tourism.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
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
