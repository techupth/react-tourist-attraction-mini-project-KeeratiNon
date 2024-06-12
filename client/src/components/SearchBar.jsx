import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-text">
      <label htmlFor="search">ค้นหาที่เที่ยว</label>
      <input
        type="text"
        placeholder="หาที่เทียวไปกัน ..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
