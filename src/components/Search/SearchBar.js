import React, { Component } from "react";
import EmojiPicker from "../Emoji/EmojiPicker";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ filteredData: event.target.value });
  };

  render() {
    const { placeholder } = this.props;
    const { filteredData } = this.state;

    return (
      <div className="search">
        <div className="searchInput">
          <input
            type="text"
            placeholder={placeholder}
            onChange={this.handleInputChange}
            value={filteredData}
          />
        </div>

        <div>
          <div className="searchIcon"></div>
        </div>
        <div className="dataResult">
          <EmojiPicker Receiver={filteredData} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
