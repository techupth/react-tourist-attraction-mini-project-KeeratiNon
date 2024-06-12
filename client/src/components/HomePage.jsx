import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [travelData, setTravelData] = useState([]);
  const [searchText, setSearchText] = useState([]);
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
    getTravelData();
  }, [searchText]);
  return (
    <div className="container">
      <header>
        <div className="header-text">เที่ยวไหนดี</div>
        <div className="search-text">
          <label htmlFor="search">ค้นหาที่เที่ยว</label>
          <input
            type="text"
            placeholder="หาที่เทียวไปกัน ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </header>
      <main>
        {travelData.map((data) => {
          return (
            <div className="content-container" key={data.eid}>
              <div className="left-content">
                <img
                  src={data.photos[0]}
                  alt="photo"
                  width="300px"
                  height="200px"
                  className="img-left"
                />
              </div>
              <div className="right-content">
                <a className="content-title" href={data.url} target="_blank">{data.title}</a>
                <div className="content-description">
                  {data.description.substring(0, 100)} ...
                </div>
                <a href={data.url} target="_blank" className="read">อ่านต่อ</a>
                <div className="all-tag">
                  หมวด
                  <span>{data.tags.filter((_, index, arr)=> index < arr.length-1).map((item,index)=>{
                    return (
                        <div className="all-tag" key={index}>
                        <span className="tags" onClick={()=>setSearchText([...searchText,item])}>
                            {item}
                        </span>
                        <span>
                            {" "}
                        </span>
                        </div>
                    )
                  })}</span> และ
                  <span className="tag">
                  {data.tags.filter((_, index, arr)=> index >= arr.length-1).map((item,index)=>{
                    return (
                        <div className="all-tag" key={index}>
                        <span className="tags" onClick={()=>setSearchText([...searchText,item])}>
                            {item}
                        </span>
                        </div>
                    )
                  })}
                  </span>
                </div>
                <div className="image-container">
                  <img
                    src={data.photos[1]}
                    alt=""
                    width="80px"
                    height="80px"
                    className="img-right"
                  />
                  <img
                    src={data.photos[2]}
                    alt=""
                    width="80px"
                    height="80px"
                    className="img-right"
                  />
                  <img
                    src={data.photos[3]}
                    alt=""
                    width="80px"
                    height="80px"
                    className="img-right"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default HomePage;
