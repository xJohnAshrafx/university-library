import React from "react";
import "./BookList.css";

function BookList() {
  const books = [
    { id: 1, title: "Book One", author: "Author A", genre: "Fiction", status: "Available" },
    { id: 2, title: "Book Two", author: "Author B", genre: "Science", status: "Checked Out" },
    { id: 3, title: "Book Three", author: "Author C", genre: "History", status: "Available" },
  ];

  return (
    <section className="book-list">
      <h2>All Books</h2>
      <div className="book-list-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={`https://m.media-amazon.com/images/I/61qDVN21X4L._SL1360_.jpg`} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Status: {book.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookList;
