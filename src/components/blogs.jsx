import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams, Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route exact path="/blog">
          {textList.map((text, i) => {
            return (
              <div key={i + 1} className="markdown-body" id="preview">
                <ReactMarkdown source={text}></ReactMarkdown>
                <Link to={`/blog/${i + 1}`} onClick={() => {}}>
                  View Full Post →
                </Link>
              </div>
            );
          })}
        </Route>
        <Route exact path="/blog/:postID">
          <BlogPost />
        </Route>
      </Switch>
    </div>
  );
};

const BlogPost = () => {
  let { postID } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const markdown = require(`../blogs/${postID}.md`);
    fetch(markdown.default)
      .then((response) => response.text())
      .then((text) => {
        setPost(text);
      });
  }, [postID]);
  return (
    <div className="inner">
      <div className="markdown-body" id="preview">
        <ReactMarkdown source={post}></ReactMarkdown>
      </div>
    </div>
  );
};
