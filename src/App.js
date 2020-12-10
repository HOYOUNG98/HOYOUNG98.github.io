import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import { Header } from "./components/header";
import { BlogList, Blog } from "./components/blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/blog">
          <BlogList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
