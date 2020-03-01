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
        title="Search Results"
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

// props.results.map(result => (
//   <li className="list-group-item" key={result.id}>
//     <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//   </li>
// ))