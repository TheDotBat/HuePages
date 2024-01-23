import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "../styles/Pages.css";

// export default function Docs() {
//   return (
//     <div className="Docs-Page">
//       <h1>Hue Engine Documentation</h1>
//       <a
//         href="https://pypi.org/project/HueEngine-Beta/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           src="https://img.shields.io/pypi/v/HueEngine-Beta.svg?style=for-the-badge&logo=python&label=Hue%20Engine-Beta&labelColor=red&color=black"
//           alt="Latest Beta Version"
//         />
//       </a>
//     </div>
//   );
// }

export default function Docs() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TheDotBat/HueEngine/master/docs/Welcome-To-Hue-Engine.md"
    )
      .then((response) => response.text())
      .then((text) => setMarkdown(marked(text)));
  }, []);

  return (
    <div className="Docs-Page">
      <h1>Hue Engine Documentation</h1>
      <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
}
