import React from "react";

export default function Avatar({ size, imgPath, name }) {
  return (
    <div className="Avatar d-flex align-items-center justify-content-center">
      {imgPath ? <img src={imgPath} alt={initials} /> : name[0]}
    </div>
  );
}
