import { useState } from "react";
import IconSvg from "./IconSvg";

const severity = [
  {
    text: "Critical",
    icon: "drop-critical",
  },
  {
    text: "High",
    icon: "drop-high",
  },
  {
    text: "Medium",
    icon: "drop-medium",
  },
  {
    text: "Low",
    icon: "drop-low",
  },
  {
    text: "Information",
    icon: "drop-info",
  },
];

export default function ReportsSeverity() {
  const [selected, setSelected] = useState(severity[0]);
  const [drop, setDrop] = useState(false);

  return (
    <div className="ReportsDropdown">
      <div
        className="ReportsDropdown__current d-inline-flex align-items-center"
        onClick={() => setDrop((prev) => !prev)}
      >
        <IconSvg name={selected.icon} /> <span>{selected.text}</span>
      </div>
      {drop && (
        <ul className="ReportsDropdown__list">
          {severity.map((item) => (
            <li
              className={`ReportsDropdown__item d-flex align-items-center ${
                selected.text === item.text
                  ? "ReportsDropdown__item--selected"
                  : ""
              }`}
              key={item.icon}
              onClick={() => {
                setSelected(item);
                setDrop(false);
              }}
            >
              <IconSvg name={item.icon} /> <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
