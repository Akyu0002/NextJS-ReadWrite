import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Book() {
  const router = useRouter();
  const { id } = router.query;

  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`, { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        setBook(data.book);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!book) {
    return null;
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            padding: 16,
            justifyContent: "center",
          }}
        >
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <p>{book.details}</p>
        </div>
      </>
    );
  }
}
