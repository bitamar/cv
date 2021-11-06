import React from "react";

function CvItem({
  place,
  when,
  role,
  description,
}: {
  place: string;
  when: string;
  role?: string;
  description: Array<string>;
}): JSX.Element {
  return (
    <div className="cv-item">
      <span className="place">{place}</span>
      <div className="when">{when}</div>
      {role && <div className="role">{role}</div>}
      <div className="description">
        {description.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
}

export default CvItem;
