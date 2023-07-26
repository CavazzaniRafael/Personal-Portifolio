import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!props.buttonAni) {
      return;
    }
    setIsActive(!isActive);
  };

  const renderBirds = () => {
    let birds = [];
    for (let i = 0; i < 30; i++) {
      birds.push(<span key={i} className={`bird--${i + 1}`}></span>);
    }
    return birds;
  };

  return (
    <div className="wrapper-no4">
      <button
        className={`button-bird ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <p className="button-bird__text">{isActive ? "DONE" : "SEND"}</p>
        <svg
          version="1.1"
          className="feather"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 75 38"
          style={{ enableBackground: "new 0 0 75 38" }}
          xmlSpace="preserve"
        ></svg>
        <span className="bird"></span>
        {renderBirds()}
      </button>
    </div>
  );
};

export default Button;
