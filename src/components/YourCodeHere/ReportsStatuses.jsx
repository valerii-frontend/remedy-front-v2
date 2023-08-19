import { useState } from "react";

const statuses = [
  {
    text: "Bug Reported",
    status: "bug",
  },
  {
    text: "In Progress",
    status: "progress",
  },
  {
    text: "Closed",
    status: "closed",
  },
];

export default function ReportsStatuses() {
  const [selected, setSelected] = useState(statuses[0]);
  const [drop, setDrop] = useState(false);

  return (
    <div className="ReportsDropdown">
      <div
        className={`ReportsDropdown__current ReportsDropdown__current--status ReportsDropdown__current--${selected.status} d-inline-flex align-items-center`}
        onClick={() => setDrop((prev) => !prev)}
      >
        <span>{selected.text}</span>
      </div>
      {drop && (
        <ul className="ReportsDropdown__list">
          {statuses.map((item) => (
            <li
              className={`ReportsDropdown__item ReportsDropdown__item--status ReportsDropdown__item--${
                item.status
              } ${
                selected.text === item.text
                  ? "ReportsDropdown__item--selected"
                  : ""
              } d-flex align-items-center`}
              key={item.icon}
              onClick={() => {
                setSelected(item);
                setDrop(false);
              }}
            >
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
