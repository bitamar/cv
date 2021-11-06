import React from "react";

function Ability({
  title,
  description,
}: {
  title: string;
  description: Array<string>;
}): JSX.Element {
  return (
    <div className="ability">
      <div className="title">{title}</div>
      <div className="description">
        {description.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
}

export default Ability;
