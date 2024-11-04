import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import FeaturedBooks from "./FeaturedBooks";
import BookList from "./BookList";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <SearchBar />
      <FeaturedBooks />
      {/* <BookList /> */}
    </div>
  );
}

export default HomePage;
