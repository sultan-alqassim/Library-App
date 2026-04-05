 import '../styles/books.css'
 
 function Book({title, author, image}) {
  return (
    <div className = "book-card">
        <img 
        className = "book-image"
        src={image} 
        alt={title}
        />

        <p className = "book-title">{title}</p>
        <p className = "book-author">{author}</p>
    </div>
  )
}

export default Book;