import React from "react";

import { Header } from "./components/header";
import { BlogList, Blog } from "./components/blogs";

function App() {
  return (
    <div>
      <Header></Header>
      {/*<BlogList></BlogList>*/}
      <Blog props={{ postID: 2 }}></Blog>
    </div>
  );
}

export default App;
