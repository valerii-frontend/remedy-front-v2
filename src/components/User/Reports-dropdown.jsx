import { useState } from "react";
import IconSvg from "../YourCodeHere/IconSvg";

export default function ReportsDropdown() {
  const [selected, setSelected] = useState({
    text: "Critical",
    icon: "drop-critical",
  });
  const [drop, setDrop] = useState(false);
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
  return (
    <div className="ReportsDropdown">
      <div
        className="ReportsDropdown__current d-flex align-items-center"
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
