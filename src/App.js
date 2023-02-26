import React from "react";
import "./App.css";
import SearchBar from "./components/Search/SearchBar";
import EmojiPicker from "./components/Emoji/EmojiPicker";
function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter your favourite emoji" />
      {/* <EmojiPicker /> */}
    </div>
  );
}

export default App;
