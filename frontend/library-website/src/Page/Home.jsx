import { Link } from "react-router-dom";
import "../styles/Home.css"

function Home() {
  return (
    <div className = "home">
      <h1>Library App</h1>
      <h2>Welcome To The Library Books collection</h2>

      <h2 className="explain-section">
        <hr />
        <p>This is a React demonstraion Project featuring:</p>
        <ul className = "no-dots">
          <li>React components & props</li>
          <li>API data fetching</li>
          <li>React router navigation</li>
          <li>useState and useEffect usage</li>
          <li>stored books data in MySql database</li>
        </ul>
      </h2>
      <hr />

      <h2>Technical Stack
        <p>Built with:</p>
        
          <p>React | CSS | PHP API| MySql</p>
        
      </h2>

      <p>
        Press the Button to View the Books collection
      </p>

      <Link to = "/books">
      <button className="view-books-button">View Books</button>
      </Link>
    
    <div className = "books-footer">
      <footer>
        <hr />
        Dev: sultan alqassim <br />
        &copy; copyright reserved<br />
      </footer>
      </div>
    </div>
  )
}

export default Home;