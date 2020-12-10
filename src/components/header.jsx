import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="title">
          <h1>Kevin Kim</h1>
        </div>

        <ul className="navigation">
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <a href="project.html">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
