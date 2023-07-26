import React, { useState } from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonAni, setButtonAni] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return;
    }
    if (form.message === "" || form.name === "") {
      return;
    }
    setButtonAni(true);
    setForm({ name: "", email: "", message: "" });
    const response = await fetch(
      "https://personal-portifoliorafael-default-rtdb.firebaseio.com/Feedback.json",
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const openWebsiteInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="scroll-div">
      <section id="contact">
        <div className="contact-wrapper">
          <form
            id="contact-form"
            className="custom-form"
            role="form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-20">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="button-position">
              <Button buttonAni={buttonAni} />
            </div>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">São Paulo , Sp</span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      +55(11) 91030-2300
                    </a>
                  </span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      CavazzaniRafael@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul className="social-media-list">
              <li
                onClick={() =>
                  openWebsiteInNewTab("https://github.com/CavazzaniRafael")
                }
              >
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li
                onClick={() =>
                  openWebsiteInNewTab(
                    "https://api.whatsapp.com/send?phone=5511910302300&text=RafaelCavazzani"
                  )
                }
              >
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li
                onClick={() =>
                  openWebsiteInNewTab(
                    "https://www.instagram.com/rafaelcavazzani/"
                  )
                }
              >
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li
                onClick={() =>
                  openWebsiteInNewTab(
                    "https://www.linkedin.com/in/rafael-cavazzani-oficial/"
                  )
                }
              >
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
            <hr />
            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
