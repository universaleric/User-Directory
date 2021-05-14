import React, { Component } from "react";
import API from "./utils/API";
import Container from "./components/Container/index";
import SearchForm from "./components/SearchForm/index";
import SearchResults from "./components/SearchResults/index";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getRandomUser()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
          <SearchResults
            search={this.state.search}
            results={this.state.results}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
