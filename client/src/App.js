import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import CardWrapper from "./components/CardWrapper"
import Card from "./components/Card"

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
        <CardWrapper
        title="Book List"
        >
          <Card
            title="Sample Title"
            author="Sample Author"
            description="Sample Description"
          >

          </Card>
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
