

import React, { useState } from "react";
import styles from "./Section.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel"

const Section = (data, title) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="main">
      <div className="header">
        <h3>{data.title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {toggle ? "showAll" : "Collapse All"}
        </h4>
      </div>
      {data & data.data.length > 0 && (
        <div className="cardWrapper">
          {!toggle ? (
            <div className="wrapper">
              {data.data.map((item) => {
                return <Card key={item.id}data={item} />;
              })}
            </div>
          ) : (
            <>
            <Carousel
              data={data}
              component={(data) => <Card data={data} />}
            />
          </>
          )}
        </div>
      )}
    </div>
  );
};
export default Section;
