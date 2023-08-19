import React from "react";

export default function Avatar({ small, img, name }) {
  const splitName = name.split(" ");
  let initials = "";
  if (splitName.length > 1) {
    initials += splitName[0][0];
    initials += splitName[1][0];
  } else {
    initials += name[0];
  }
  return (
    <div
      className={`Avatar d-flex align-items-center justify-content-center ${
        small ? "Avatar--sm" : ""
      }`}
    >
      {img ? <img src={img} alt={initials} /> : initials}
    </div>
  );
}
