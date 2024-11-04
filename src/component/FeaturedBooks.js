import React from "react";
import "./FeaturedBooks.css";

function FeaturedBooks() {
  const featuredBooks = [
    { id: 1, title: "Book One", author: "Author A" },
    { id: 2, title: "Book Two", author: "Author B" },
    { id: 3, title: "Book Three", author: "Author C" },
  ];

  return (
    <section className="featured-books">
      <h2>Featured Books</h2>
      <div className="book-cards">
        {featuredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={"https://m.media-amazon.com/images/I/61qDVN21X4L._SL1360_.jpg"} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedBooks;
