import React from "react";
import LinkButton from "./LinkButton";

const TravelItem = ({ data, handleClickTag }) => {
  return (
    <div className="content-container">
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
        <a className="content-title" href={data.url} target="_blank">
          {data.title}
        </a>
        <p className="content-description">
          {data.description.substring(0, 100)} ...
        </p>
        <a href={data.url} target="_blank" className="read">
          อ่านต่อ
        </a>
        <div className="all-tag">
          หมวด
          <span>
            {data.tags
              .filter((_, index, arr) => index < arr.length - 1)
              .map((item, index) => {
                return (
                  <div className="all-tag" key={index}>
                    <span className="tags" onClick={() => handleClickTag(item)}>
                      {item}
                    </span>
                    <span> </span>
                  </div>
                );
              })}
          </span>{" "}
          และ
          <span className="tag">
            {data.tags
              .filter((_, index, arr) => index >= arr.length - 1)
              .map((item, index) => {
                return (
                  <div className="all-tag" key={index}>
                    <span className="tags" onClick={() => handleClickTag(item)}>
                      {item}
                    </span>
                  </div>
                );
              })}
          </span>
        </div>
        <div className="footer-content">
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
          <div>
            <LinkButton url={data.url}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelItem;
