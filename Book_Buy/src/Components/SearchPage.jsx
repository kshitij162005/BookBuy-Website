import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/SearchPage.css";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // we used useEffect hook to handle the errors as when the API throws error so we can handle it using the useEffect hook. 
  useEffect(() => {
    // fetching the desired things from the API using AXIOS.  
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
        console.error("Error fetching books", error);
      }
    };

    fetchBooks();
  }, []); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
// we are converting everything to lowerCase for us as thought the user enters capital letters or anything we can read it in lowerCase.
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="outerContainer">
      <div className="navBar">
        <div className="kalviumBook">
          {/* <img src="../src/Elements/kalvium.png" alt="" /> */}
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
          {/* Routing so we can switch to different react page.*/}
          <Link to ={"/Register"}>
          <button className="registerButton">REGISTER</button>
          </Link>
        </div>
      </div>
      <div className="bookShelf">
        <div className="BookList">
          {filteredBooks.map((book) => (
            <div className="Book" key={book.id}>
              <img src={book.imageLinks.thumbnail} alt={book.title}/>
              <div className="name">{book.title}</div>
              <div>Rating: {book.averageRating || "NA"}</div>
              <div>Price: Free</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
