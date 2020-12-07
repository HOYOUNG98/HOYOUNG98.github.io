import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import pmd1 from "../blogs/preview1.md";
import pmd2 from "../blogs/preview2.md";

import "../styles/blog.css";

const blogList = [pmd1, pmd2];

export const BlogList = () => {
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    blogList.forEach((blog) => {
      fetch(blog)
        .then((response) => response.text())
        .then((text) => {
          setTextList((oldList) => [...oldList, text]);
        });
    });
  }, []);

  return (
    <div className="inner">
      {textList.map((text) => {
        return (
          <div className="markdown-body" id="preview">
            <ReactMarkdown source={text}></ReactMarkdown>
            <a href>View Full Post →</a>
          </div>
        );
      })}
    </div>
  );
};
