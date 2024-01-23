import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "../styles/Pages.css";
import DocsBar from "../components/DocsBar";
import docsSections from "./docsSections";

export default function Docs() {
  const [currentSection, setCurrentSection] = useState(docsSections[0].path);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/TheDotBat/HueEngine/master/${currentSection}.md`
    )
      .then((response) => response.text())
      .then((text) => setMarkdown(marked(text)));
  }, [currentSection]);

  const handleSectionChange = (path) => {
    setCurrentSection(path);
  };

  return (
    <div className="Docs-Page">
      <DocsBar sections={docsSections} onSectionChange={handleSectionChange} />
      <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
}
