import React from "react";
import Header from "./components/Header/index";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Search />
      </header>
    </div>
  );
}

export default App;

//render random users on page as a bunch of <li>s and mapping over.
//have a filter textbox which will determine what shows up on page.
//will have it recognize and rerender with every key stroke.
//do sort by last.
//this is on a single page, so you don't need react-router-dom.
//need a class component for page.
//query should be in componentDidMount().
//will use this.state.setState to rerender.
//state object will need input text, array of users, array of filtered users
//every time search bar gets changed, it should update based on original array.
//new filtered array will be created in handleInputChange().
