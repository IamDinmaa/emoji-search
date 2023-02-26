import React, { useState } from "react";
import EmojiPicker from "../Emoji/EmojiPicker";

const SearchBar = ({ placeholder }) => {
  const [filteredData, setFilteredData] = useState("");

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => {
            setFilteredData(event.target.value);
          }}
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
};

export default SearchBar;
