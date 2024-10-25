import React from 'react';
import './Footer.css'; // Optional: Import a CSS file for styling

function Footer() {
  return (
    <footer className="footer Black-bg mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className='heading-5'>About Me</h5>
            <p>I'm a passionate web developer with a focus on creating engaging user experiences.</p>
          </div>
          <div className="col-md-4">
            <h5 className='heading-5'>Contact</h5>
            <p>Email: bharath7672@gmail.com</p>
            <p>Phone: 9502215946</p>
          </div>
          <div className="col-md-4">
            <h5 className='heading-5'>Connect</h5>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a><br />
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bharath. All rights reserved.</p>
      </div>
      </div>

    </footer>
  );
}

export default Footer;
