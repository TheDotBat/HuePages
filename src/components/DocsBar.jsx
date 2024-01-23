import React from "react";

export default function DocsBar({ sections, onSectionChange }) {
  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section.title} onClick={() => onSectionChange(section.path)}>
            {section.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
