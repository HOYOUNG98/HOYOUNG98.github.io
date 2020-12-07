import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="title">
          <h1>Kevin Kim</h1>
        </div>

        <ul className="navigation">
          <li>
            <a href="blog.html">Blogs</a>
          </li>
          <li>
            <a href="project.html">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
