import React from "react";
import { Route, IndexRoute } from "react-router";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Resources from "./components/Resources";

const Routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/resources" component={Resources} />
  </Route>
);

export default Routes;
