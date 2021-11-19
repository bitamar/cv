import React from "react";

function Ability({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element {
  return (
    <div className="item">
      <div className="title">{title}</div>
      <p className="description">{description}</p>
    </div>
  );
}

export default Ability;
