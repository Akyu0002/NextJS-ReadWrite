import { useRef } from "react";
import Link from "next/link";

export default function AddNew() {
  const titleRef = useRef();
  const authorRef = useRef();
  const detailsRef = useRef();

  const handleSave = async (e) => {
    e.preventDefault();

    const newBook = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      details: detailsRef.current.value,
    };

    const res = await fetch("/api/books/", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/books">Show Collection</Link>
        <Link href="/books/addnew">Add New</Link>
      </nav>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" ref={authorRef} />
        <label htmlFor="details">Details</label>
        <input type="text" id="pages" ref={detailsRef} />
        <button
          onClick={(e) => {
            handleSave(e);
          }}
        >
          Add Book
        </button>
        <button type="submit"></button>
      </form>
      <Link href="/books">Back to Collection</Link>
    </>
  );
}
