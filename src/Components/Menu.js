import React, { useEffect, useState } from "react";
import "./Menu.css";
import Work from "./Contents/Work";
import About from "./Contents/About";
import Contact from "./Contents/Contact";

const Menu = () => {
  const text =
    "Experienced professional in Computer Networks with 6 years of customer service expertise. Transitioning into Information Technology, focusing on front-end programming. Skilled in programming logic, code development, and creating robust, high-quality systems. Prioritizing code readability, with experience in layout development, website maintenance, and regulatory compliance. Specializing in optimizing web pages for performance and scalability, delivering exceptional user experiences. Proficient in HTML, CSS, Bootstrap, JavaScript, jQuery, React Js, Git, and Github for front-end development. Dedicated to translating creative designs into clean, bug-free code that exceeds expectations.";

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
