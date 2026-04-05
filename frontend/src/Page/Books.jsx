import Book from "../components/Book";
import '../styles/books.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Books () {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost/library-api/api/books.php")
      .then((response) => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch((error) => {
        console.log("Error fetching books: ", error);
      });
  }, [])

  return (
    
    <div className="books-page">
      <Link to = "/">
      <button className = "Books-button">Back To Home Page</button>
      </Link>
      
      <div className="books-header">
        <h1>Available Books</h1>
        <h2>Choose the book you like</h2>
      </div>

    <div className="books-grid">
      {books.map((book) => (
        <Book 
        title = {book.title}
        author = {book.author}
        image = {book.image} 
        />
      ))}
    </div>
   </div>
  );
};

export default Books;