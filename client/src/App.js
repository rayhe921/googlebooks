import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar
          title="Google Books"
          linkOne="Search"
          linkTwo="Saved"
        ></Navbar>
          <Header
          title="(React) Google Book Search"
          description="Search for and save books of interest"
          ></Header>
      </Wrapper>
    );
  }
}

export default App;
