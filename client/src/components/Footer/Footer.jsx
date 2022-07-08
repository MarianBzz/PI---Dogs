import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-right">
          <ul className="listaa">
            <li>
              <a href="https://www.linkedin.com/in/mariano-bozzoletti/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  width="45"
                  height="45"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/MarianBzz">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github"
                  width="45"
                  height="45"
                />
              </a>
            </li>
            <li>
              <a href="mailto:mbozzoletti@hotmail.com">
                <img
                  src="https://pnggrid.com/wp-content/uploads/2021/12/Email-Icon-Png-Transparent.png"
                  width="50"
                  height="50"
                  alt="email"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-left">
          <li className="pruebarda">
            <p class="footer-links  ">
              <Link to="/" style={{ textDecoration: "none" }}>
                <a href="#">Landing</a>
              </Link>
            </p>
            <p class="footer-links">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <a href="#">Home</a>
              </Link>
            </p>
            <p class="footer-links">
              <Link to="/create" style={{ textDecoration: "none" }}>
                <a href="#">Create</a>
              </Link>
            </p>
          </li>

          <p>
            Developed by <strong>Mariano Bozzoletti</strong> &copy; 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
