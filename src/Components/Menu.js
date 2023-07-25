import React, { useEffect, useState } from "react";
import "./Menu.css";
import Work from "./Contents/Work";
import About from "./Contents/About";
import Contact from "./Contents/Contact";

const Menu = () => {
  const text =
    "I am a professional who graduated in Computer Network and have 06 years of experience in customer service. Throughout my career, I have worked in small and medium-sized companies, but I am currently transitioning into the field of Information Technology, specifically focusing on front-end programming.My expertise lies in programming logic, code development, and creating robust systems with high quality. I prioritize code readability and have experience in layout development, website and system maintenance, as well as ensuring compliance with regulations. Additionally, I specialize in optimizing web pages for performance, scalability, and providing the best user experience.I possess the necessary skills to develop interfaces for web system projects using HTML, CSS, Bootstrap, WordPress, JavaScript, jQuery, Git, and GitHub technologies. My main focus is on front-end development, where I excel at translating creative designs into clean and bug-free code. I am dedicated to delivering results that meet and exceed expectations.";

  useEffect(() => {
    const handleMouseMove = (e) => {
      const $menu = document.querySelector(".Menu-list");
      const $item = document.querySelectorAll(".Menu-list-item");
      const w = window.innerWidth;
      const h = window.innerHeight;

      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;
      const dy = e.pageY - h / 4;
      const dx = e.pageX - w / 4;
      const theta = Math.atan2(dy, dx);
      let angle = (theta * 180) / Math.PI - 90;

      if (angle < 0) {
        angle += 360;
      }

      const offsetPoster = $menu.dataset.offset;
      const transformPoster = `translate3d(0, ${
        -offsetX * offsetPoster
      }px, 0) rotateX(${-offsetY * offsetPoster}deg) rotateY(${
        offsetX * (offsetPoster * 3)
      }deg)`;

      $menu.style.transform = transformPoster;

      $item.forEach((item) => {
        const offsetLayer = item.dataset.offset || 0;
        const transformLayer = `translate3d(${offsetX * offsetLayer}px, ${
          offsetY * offsetLayer
        }px, 20px)`;

        item.style.transform = transformLayer;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [WorkClasses, setWorkClasses] = useState("");
  const [menu, setMenu] = useState({ about: "", work: "", contact: "" });

  const [work, setWork] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const workHandler = () => {
    if (!work) {
      setMenu({ about: "", work: "menu-active", contact: "" });
      setWorkClasses("work-effect-show ");
      setWork(true);
      setContact(false);
      setAbout(false);
      return;
    }
    if (work) {
      setWorkClasses("work-effect-hide");
      setTimeout(function () {
        setWork(false);
      }, 1000);

      return;
    }
  };
  const aboutHandler = () => {
    if (!about) {
      setWorkClasses("");
      setMenu({ about: "menu-active", work: "", contact: "" });

      setAbout(true);
      setContact(false);
      setWork(false);
      return;
    }
    if (about) {
      setWorkClasses("about-effect-hide");
      setTimeout(function () {
        setAbout(false);
      }, 1000);

      return;
    }
  };
  const contactHandler = () => {
    if (!contact) {
      setWorkClasses("contact-effect-show");
      setMenu({ about: "", work: "", contact: "menu-active" });

      setWork(false);
      setAbout(false);
      setContact(true);
      return;
    }
    if (contact) {
      setWorkClasses("contact-effect-hide");

      setTimeout(function () {
        setContact(false);
      }, 1000);

      return;
    }
  };

  return (
    <div class="Menu">
      <ul class="Menu-list" data-offset="10">
        <li
          onClick={aboutHandler}
          className={"Menu-list-item" + (about ? " " + menu.about : "")}
          data-offset="16"
          onclick
        >
          About
          <span className="Mask">
            <span>About</span>
          </span>
          <span className="Mask">
            <span>About</span>
          </span>
        </li>
        <div className={about ? WorkClasses : ""}>
          {about && <About text={text} />}
        </div>
        <li
          onClick={workHandler}
          className={"Menu-list-item" + (work ? " " + menu.work : "")}
          data-offset="12"
          onclick
        >
          Work
          <span className="Mask">
            <span>Work</span>
          </span>
          <span className="Mask">
            <span>Work</span>
          </span>
        </li>
        <div className={work ? WorkClasses : ""}> {work && <Work />}</div>

        <li
          className={"Menu-list-item" + (contact ? " " + menu.contact : "")}
          data-offset="8"
          onClick={contactHandler}
          onclick
        >
          Contact
          <span className="Mask">
            <span>Contact</span>
          </span>
          <span className="Mask">
            <span>Contact</span>
          </span>
        </li>
        <div>
          <div className={contact ? WorkClasses : ""}>
            {contact && <Contact />}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
