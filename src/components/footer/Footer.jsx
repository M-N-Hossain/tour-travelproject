import React from "react";

import "./footerStyles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upperRow">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favorite destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="lowerRow">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
}
