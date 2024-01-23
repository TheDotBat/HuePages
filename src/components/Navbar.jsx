import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function NavBar() {
  return (
    <div className="Nav">
      <div className="Nav-Content">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/docs"}>Docs</Link>
          </li>
        </ul>
        <div className="Nav-Shields">
          <ul>
            <li>
              <a
                href="https://pypi.org/project/HueEngine-Beta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.shields.io/pypi/v/HueEngine-Beta.svg?style=for-the-badge&logo=python&label=Hue%20Engine-Beta&labelColor=red&color=black"
                  alt="Latest Beta Version"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TheDotBat/HueEngine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/GitHub-HueEngine?style=for-the-badge&logo=github&label=Hue%20Engine%20%C2%A9%EF%B8%8F&labelColor=green&color=black"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TheDotBat/HueEngine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Discord-HueEngine?style=for-the-badge&logo=discord&label=Hue%20Community&labelColor=lightblue&color=black"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
