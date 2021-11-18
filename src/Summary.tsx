import React from "react";

function Summary({ summary }: { summary: string }): JSX.Element {
  return (
    <>
      <h1>Itamar Bar-Lev</h1>
      <p className="box summary ">{summary}</p>
    </>
  );
}

export default Summary;
