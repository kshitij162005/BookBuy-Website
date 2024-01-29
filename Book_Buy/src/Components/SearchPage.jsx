import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/SearchPage.css";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://reactnd-books-api.udacity.com/books",
          {
            headers: {
              Authorization: "whatever-you-want",
            },
          }
        );
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="outerContainer">
      <div className="navBar">
        <div className="kalviumBook">
          <img src="../src/Elements/kalvium.png" alt="" />
          <h1>Kalvium Books</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search the book you want to Read"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="register">
          <button className="registerButton">REGISTER</button>
        </div>
      </div>
      <div className="bookShelf">
        <div className="BookList">
          {filteredBooks.map((book) => (
            <div className="Book" key={book.id}>
              <img src={book.imageLinks.thumbnail} alt={book.title} />
              <div className="name">{book.title}</div>
              <div>Rating: {book.averageRating}</div>
              <div>Price: {book.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
