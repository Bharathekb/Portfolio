import React, { useState } from "react";
import "./Header.css";
import Button from "./Button";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBlogClick = () => {
    window.location.href = "https://bharathportfolio.rf.gd/blog/contact-us/";
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container py-2">
          <a className="navbar-brand" href="https://bharathportfolio.rf.gd/">
            <img src="./assets/My-logo.png" alt="site logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img
                src={
                  menuOpen ? "./assets/Menu-close.svg" : "./assets/Menu-nav.svg"
                }
                alt="menu icon"
              />
            </span>
          </button>
          <div
            className={`collapse navbar-collapse mt-3 mt-lg-0 ${
              menuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto d-block d-lg-flex">
              <li className="nav-item">
                <a
                  className="nav-link active F-500"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link F-500 "
                  href="https://bharathportfolio.rf.gd/blog/"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link F-500 " href="https://mitravan.rf.gd/">
                  Mitravan
                </a>
              </li>
            </ul>
            <Button
              text="Contact"
              className="mt-3 mt-lg-0"
              onClick={handleBlogClick}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
