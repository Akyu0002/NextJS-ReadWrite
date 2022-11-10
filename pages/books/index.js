import { useState, useEffect } from "react";
import Link from "next/link";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books", { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        setBooks(data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!books) {
    return null;
  } else {
    return (
      <main>
        <h1>Welcome to MADD Library.</h1>
        <div>
          <h2>Available Books</h2>
          <ul>
            {books.map((book) => {
              return (
                <Link key={book.id} href={`books/${book.id}`}>
                  <li>{book.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }

  return (
    <>
      <h1>Books</h1>
    </>
  );
}

export default Books;
