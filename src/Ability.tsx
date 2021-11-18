import React from "react";

function Ability({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element {
  return (
    <div className="ability">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default Ability;
