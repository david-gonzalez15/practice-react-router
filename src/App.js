import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import "./styles.css";

import Home from "./components/Home";
import User from "./components/User";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </>
  );
};
export default App;
