import React from "react";
import "../styles/Pages.css";

export default function Docs() {
  return (
    <div className="Docs-Page">
      <h1>Hue Engine Documentation</h1>
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
    </div>
  );
}
