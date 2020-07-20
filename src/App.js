import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/main.scss";

import Nav from "./components/Nav";
import About from "./components/About";
import Photography from "./components/Photography";
import Home from "./components/Home";
import PhotoPage from "./components/photography/PhotoPage";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/photography" exact component={Photography} />
          <Route path="/photography/:id" exact component={PhotoPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
