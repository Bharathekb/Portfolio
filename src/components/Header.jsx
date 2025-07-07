import React, { useEffect, useState } from "react";
import "./Header.css";
import Button from "./Button";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleBlogClick = () => {
    window.location.href = "https://bharathportfolio.rf.gd/blog/contact-us/";
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header fixed-top ${scrolled ? "White-header" : ""}`}>
   <nav
  className={`navbar navbar-expand-lg custom-navbar ${
    menuOpen && !scrolled ? "bg-black" : ""
  }`}
>


        <div className="container">
          <a className="navbar-brand" href="https://bharathportfolio.rf.gd/">
            <img
              src={
                scrolled
                  ? "./assets/My-logo-black.png"
                  : "./assets/My-logo-white.png"
              }
              alt="site logo"
            />
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
                  menuOpen
                    ? (scrolled
                      ? "./assets/Menu-close-black.svg"
                      : "./assets/Menu-close-white.svg")
                    : (scrolled
                      ? "./assets/Menu-nav-black.svg"
                      : "./assets/Menu-nav-white.svg")
                }
                alt="menu icon"
              />
            </span>
          </button>
          <div
            className={`collapse navbar-collapse mt-3 mt-lg-0 ${menuOpen ? "show" : ""
              }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto d-block d-lg-flex">
              <li className="nav-item">
                <a
                  className="nav-link active F-500"
                  aria-current="page"
                  href="https://bharathportfolio.rf.gd/"
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
                <a
                  className="nav-link F-500 "
                  href="/resume"
                >
                  Resume
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
    </header>
  );
}

export default Header;
