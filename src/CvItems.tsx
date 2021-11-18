import React from "react";

type When = {
  from: { year: number; month?: number };
  to?: { year: number; month?: number };
};

type CvItem = {
  hidden?: boolean;
  place: string;
  subtitle?: string;
  when: When;
  where: string;
  role?: string;
  description: Array<string>;
};

function When({ from, to }: When) {
  return (
    <div className="when">
      {from.year} - {to ? to.year : "Present"}
    </div>
  );
}

function CvItem({
  place,
  where,
  subtitle,
  when,
  role,
  description,
}: CvItem): JSX.Element {
  return (
    <div className="cv-item">
      <span className="place">{place}</span>
      <span className="where">{where}</span>
      <When {...when} />
      {subtitle && <div className="subtitle">{subtitle}</div>}
      {role && <div className="role">{role}</div>}
      <div className="description">
        {description.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
}

function CvItems({ cvItems }: { cvItems: Array<CvItem> }): JSX.Element {
  return (
    <div className="list separate-items">
      {cvItems
        .filter(({ hidden }) => !hidden)
        .map((item, i) => (
          <CvItem key={i} {...item} />
        ))}
    </div>
  );
}

export default CvItems;
