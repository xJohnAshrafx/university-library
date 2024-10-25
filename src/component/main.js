import React from 'react';
import './main.css';

function main() {
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

      {/* Main Content */}
      <main className="main-content">

      <section className="section-container new-arrivals">
          <h2>i love you john</h2>
          <p>ايه رايك في دي يبا </p>
        </section>


        <section className="section-container new-arrivals">
          <h2>New Arrivals</h2>
          <p>Explore the latest additions to our library collection, updated weekly.</p>
        </section>

        <section className="section-container popular-books">
          <h2>Popular Books</h2>
          <p>Check out the most popular books among students and faculty.</p>
        </section>

        <section className="section-container research-papers">
          <h2>Research Papers</h2>
          <p>Access a vast collection of research papers across various fields of study.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>All rights reserved for Hurghada University 2024</p>
      </footer>
    </div>
  );
}

export default main;
