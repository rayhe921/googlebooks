import React, { Component } from "react";
import Navbar from "../components/Navbar"
import Wrapper from "../components/Wrapper"
import Header from "../components/Header"
import CardWrapper from "../components/CardWrapper"
import Card from "../components/Card"

class Search extends Component {

  
  render() {
    return (
        <CardWrapper
        title="Saved Book List"
        >
          <Card
            title="Sample Title"
            author="Sample Author"
            description="Sample Description"
          >
          </Card>
        </CardWrapper>
    );
  }
}

export default Search;
