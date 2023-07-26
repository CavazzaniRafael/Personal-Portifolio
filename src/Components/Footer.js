import React from "react";
import "./Footer.css";

const Footer = () => {
  const bubbles = [];
  for (let i = 0; i < 128; i++) {
    const size = 3 + Math.random() * 2;
    const distance = 6 + Math.random() * 4;
    const position = -5 + Math.random() * 110;
    const time = 2 + Math.random() * 2;
    const delay = -1 * (2 + Math.random() * 1);

    const bubbleStyle = {
      "--size": `${size}rem`,
      "--distance": `${distance}rem`,
      "--position": `${position}%`,
      "--time": `${time}s`,
      "--delay": `${delay}s`,
    };

    bubbles.push(<div className="bubble" style={bubbleStyle} key={i}></div>);
  }

  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">{bubbles}</div>
      </div>

      <svg style={{ position: "fixed", bottom: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
