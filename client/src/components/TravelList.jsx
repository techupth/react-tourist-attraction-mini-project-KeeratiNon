import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TravelItem from "./TravelItem";

const API_BASE_URL = "https://travel-website-b3xi.onrender.com";

const TravelList = ({ searchText, handleClickTag }) => {
  const [travelData, setTravelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTravelData = async () => {
    try {
      if (!isLoading) {
        setIsLoading(true);
      }
      const result = await axios.get(
        `${API_BASE_URL}/trips?keywords=${searchText}`
      );
      setTravelData(result.data.data);
      setIsLoading(false);
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
      {isLoading ? (
        <div className="loader">Loading</div>
      ) : (
        travelData.map((data) => {
          return (
            <TravelItem
              data={data}
              key={data.eid}
              handleClickTag={handleClickTag}
            />
          );
        })
      )}
    </main>
  );
};

export default TravelList;
