import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "./components/header";
import { BlogList } from "./components/blogs";
import { About } from "./components/about";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="mainContainer">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/blog">
            <BlogList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
