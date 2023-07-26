import React, { useEffect } from "react";
import "./ScrollDown.css";
import Background from "./Background";
import Menu from "./Menu";
import HeaderContent from "./Header";
import Footer from "./Footer";

const ScrollDown = () => {
  useEffect(() => {
    const scrollFooter = (scrollY, heightFooter) => {
      console.log(scrollY);
      console.log(heightFooter);

      if (scrollY >= heightFooter) {
        document.querySelector("footer").style.bottom = "0px";
      } else {
        document.querySelector("footer").style.bottom = `-${heightFooter}px`;
      }
    };

    const windowHeight = window.innerHeight;
    const footerHeight = document.querySelector("footer").offsetHeight;
    const heightDocument =
      windowHeight +
      document.querySelector(".content").offsetHeight +
      footerHeight -
      20;

    document.querySelector(
      "#scroll-animate"
    ).style.height = `${heightDocument}px`;
    document.querySelector(
      "#scroll-animate-main"
    ).style.height = `${heightDocument}px`;
    document.querySelector("header").style.height = `${windowHeight}px`;
    document.querySelector("header").style.lineHeight = `${windowHeight}px`;
    document.querySelector(
      ".wrapper-parallax"
    ).style.marginTop = `${windowHeight}px`;

    scrollFooter(window.scrollY, footerHeight);

    window.onscroll = function () {
      const scroll = window.scrollY;

      document.querySelector("#scroll-animate-main").style.top = `-${scroll}px`;
      document.querySelector("header").style.backgroundPositionY = `${
        50 - (scroll * 100) / heightDocument
      }%`;
    };
  }, []);

  return (
    <div id="scroll-animate">
      <div id="scroll-animate-main">
        <div className="wrapper-parallax">
          <header>
            <HeaderContent />
            <Background />
          </header>

          <section className="content">
            <div>
              <Menu />
            </div>
          </section>
          <footer>
            <Footer />
            <h1>Footer</h1>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;
