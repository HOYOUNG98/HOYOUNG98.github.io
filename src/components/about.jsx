import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import intro from "../intro/intro.md";

export const About = () => {
  const [introText, setIntro] = useState("");

  useEffect(() => {
    fetch(intro)
      .then((response) => response.text())
      .then((text) => {
        setIntro(text);
      });
  }, []);

  return (
    <div className="inner">
      <div className="introContainer">
        <div className="markdown-body introText">
          <ReactMarkdown source={introText}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
