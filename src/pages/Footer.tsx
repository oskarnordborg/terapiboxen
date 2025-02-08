import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className={"footer"}>
      <div>
        <i>
          &copy; {new Date().getFullYear()} Terapiboxen AB. All rights reserved.
        </i>
        <div className={"socialMedia"}>
          {/* <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a> */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
