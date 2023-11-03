// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList";
import Author from "./components/Author";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/authors/:id" element={<Author />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
