// Author.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles.css";

function Author() {
  const [author, setAuthor] = useState(null);
  const { id } = useParams(); // Access URL parameters with useParams

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    author && (
      <div className="author">
        <div>
          <Link to="/">
            <button className="button">Return to Post Lists</button>
          </Link>
        </div>
        <h2>{author.name}</h2>
        <h4>
          <b>User name:</b> {author.username}
        </h4>
        <p>
          <b>Email:</b> {author.email}
        </p>
        <p>
          <b>Phone:</b> {author.phone}
        </p>
        <p>
          <b>Website:</b> {author.website}
        </p>
        <p>
          <b>Company:</b> {author.company.name}
        </p>
      </div>
    )
  );
}

export default Author;
