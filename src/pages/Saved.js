import React, { Component } from "react";
// import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
import {Container } from "../components/Grid";
import  List  from "../components/List";

class Saved extends Component {
  state = {
    savedBooks: []
};

//when this component mounts, grab all books that were save to the database 
componentDidMount() {
    API.getBooks()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
}

//function to remove book by id
handleDeleteButton = id => {
    API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
}

render() {
  return (
      <Container fluid className="container">
          
          <Container>
              <List savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
          </Container>
      </Container>
  )
}
}

export default Saved;