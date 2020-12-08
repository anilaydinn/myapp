import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/myapp">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
