import React from "react";
import "./Header.css";
import Button from "./Button";
function Header() {
  const handleBlogClick = () => {
    window.location.href = "https://bharathportfolio.rf.gd/blog/contact-us/";
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mt-3 mt-lg-0"
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
                  <hr />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link F-500 "
                  href="https://bharathportfolio.rf.gd/blog/"
                >
                  Blog
                  <hr />
                </a>
              </li>
            </ul>
            <Button text="Contact" onClick={handleBlogClick} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
