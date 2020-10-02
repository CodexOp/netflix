import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className="nav_logo">
        <Link to="/">
          <img
            className="logoo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </Link>
      </div>
      <div className="user_logo">
        <img
          className="logoo2"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="user"
        />
      </div>
    </div>
  );
};
export default Nav;
