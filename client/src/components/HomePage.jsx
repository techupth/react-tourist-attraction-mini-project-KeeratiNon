import React from "react";
import { useState } from "react";
import TravelList from "./TravelList";
import SearchBar from "./SearchBar";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  const handleClickTag = (item) => {
    if (searchText.includes(item)) return;
    setSearchText(searchText + " " + item);
  };
  return (
    <div className="container">
      <header>
        <div className="header-text">เที่ยวไหนดี</div>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </header>
      <TravelList searchText={searchText} handleClickTag={handleClickTag} />
    </div>
  );
};

export default HomePage;
