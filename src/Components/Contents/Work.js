import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import "./Work.css";
import tinDog from "../Images/Tindog.png";
import space from "../Images/space.png";

const Work = (props) => {
  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
  }, []);

  const [items, setItems] = useState([
    {
      background: tinDog,
      clicked: false,
      title: "Cavazzani Food",
      content: "This is a Full Delivery Website that i am creating with React.",
      button: "VIEW WEBSITE",
      active: false,
    },
    {
      background: tinDog,
      clicked: false,
      title: "Tindog",
      content:
        "Tindog is copycat from tinder. It's a Website that I built in HTML, CSS and BOOTSTRAP.",
      button: "VIEW WEBSITE",
      active: false,
    },
    {
      background: space,
      clicked: false,
      title: "Exploring Space",
      content: "This is a Websisite that i built With React.",
      button: "VIEW WEBSITE",
      active: false,
    },
  ]);

  const expand = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        clicked: i === index ? !item.clicked : false,
      }))
    );
  };

  const handleItemClick = (index) => {
    expand(index);
    setTimeout(() => {
      setItems((prevItems) =>
        prevItems.map((item, i) => ({
          ...item,
          active: i === index && item.clicked,
        }))
      );
    }, 100);
  };

  useEffect(() => {
    gsap.to(".item", {
      duration: 2,
      ease: "elastic.out(1, 0.3)",
      width: (index) => (items[index].clicked ? "40vw" : "10vw"),
      className: (index) => (items[index].active ? "item item-active" : "item"),
    });
  }, [items]);

  return (
    <div className="group">
      {items.map((item, index) => (
        <div
          key={index}
          className="item"
          style={{
            backgroundImage: `url(${item.background})`,
          }}
          onClick={() => handleItemClick(index)}
        >
          <div className={item.active ? "content-div" : ""}>
            <h2 className={item.active ? "title-active" : "title"}>
              {item.title}
            </h2>
            <p className={item.active ? "copy-active" : "copy"}>
              {item.content}
            </p>
            <button
              type="button"
              className={item.active ? "btn-active" : "btn"}
            >
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
