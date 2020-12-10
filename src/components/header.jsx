import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="title">
          <Link to="/" className="linkHome">
            Kevin Kim
          </Link>
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
