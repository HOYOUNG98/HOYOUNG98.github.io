import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import md1 from "../blogs/1.md";

export const Blog = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    fetch(md1)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
        console.log(text);
      });
  }, [text]);

  console.log(text);
  return <ReactMarkdown source={text}></ReactMarkdown>;
};
