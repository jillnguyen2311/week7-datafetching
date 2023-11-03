// Post.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  const [author, setAuthor] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data))
      .catch((error) => console.error(error));

    fetch(`https://jsonplaceholder.typicode.com/photos/${post.id}`)
      .then((response) => response.json())
      .then((data) => setImage(data.url))
      .catch((error) => console.error(error));
  }, [post.userId, post.id]);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      {author && (
        <Link to={`/authors/${author.id}`}>Author: {author.name}</Link> // Pass author.id instead of author.name
      )}
      <img src={image} alt={post.title} />
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
