import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/Search/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar placeholder="Enter your favourite emoji" />
      </div>
    );
  }
}

export default App;
