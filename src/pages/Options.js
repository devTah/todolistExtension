import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Navigation from "../components/nav/Navigation.js";
function Options() {
  return (
    <Router >
      <Route path="/options.html" component={Navigation} />
    </Router>
  );
}

export default Options;
