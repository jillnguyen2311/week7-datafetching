// PostList.js

import React, { useState, useEffect } from "react";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="title">Recent Posts</h1>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
