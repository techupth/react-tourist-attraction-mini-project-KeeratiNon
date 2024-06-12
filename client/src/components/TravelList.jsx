import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TravelItem from "./TravelItem";

const TravelList = ({ searchText, handleClickTag }) => {
  const [travelData, setTravelData] = useState([]);
  const getTravelData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      setTravelData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getData = setTimeout(getTravelData, 250);
    return () => clearTimeout(getData);
  }, [searchText]);
  return (
    <main>
      {travelData.map((data) => {
        return (
          <TravelItem
            data={data}
            key={data.eid}
            handleClickTag={handleClickTag}
          />
        );
      })}
    </main>
  );
};

export default TravelList;
