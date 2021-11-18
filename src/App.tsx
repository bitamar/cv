import React from "react";
import bg from "./penrose.svg";
import itamarSmall from "./itamar122.webp";
import itamarLarge from "./itamar376.webp";
import CvItems from "./CvItems";
import content from "./content.json";
import "./App.scss";
import Ability from "./Ability";
import Summary from "./Summary";

function debounce(f: () => void) {
  let timeout: number | null = null;

  return {
    go() {
      this.cancel();
      timeout = window.setTimeout(f, 500);
    },
    cancel() {
      timeout && clearTimeout(timeout);
    },
  };
}

function App(): JSX.Element {
  const isNarrow = () => window.innerWidth < 1024;

  const [displayBg, setDisplayBg] = React.useState(true);
  const [narrow, setNarrow] = React.useState(isNarrow());

  React.useEffect(() => {
    const debounced = debounce(() => {
      setDisplayBg(true);
    });

    const handleResize = () => {
      setDisplayBg(false);
      debounced.go();

      if (isNarrow() !== narrow) {
        setNarrow(isNarrow());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      debounced.cancel();
    };
  }, [narrow]);

  return (
    <div className={narrow ? "narrow" : ""}>
      <div
        id="background"
        style={{ backgroundImage: `url(${bg})` }}
        className={"dont-print " + (!displayBg ? "hidden" : "fade-in")}
      />
      <div className="column contact">
        {narrow ? (
          <div>
            <img width="61" height="61" src={itamarSmall} alt="" />
            <Summary summary={content.summary} />
          </div>
        ) : (
          <img width="188" height="188" src={itamarLarge} alt="" />
        )}

        <div className="box list">
          <div className="item">
            <a href="mailto:bitamar@gmail.com">bitamar@gmail.com</a>
          </div>
          <div className="item">
            <a href="tel:+972-54-9400041">+972-54-9400041</a>
          </div>
          <div className="item">
            <a href="https://www.linkedin.com/in/itamar-shapira-bar-lev-6a735720">
              LinkedIn
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/bitamar">GitHub</a>
          </div>
          <div className="item">
            <a href="https://www.drupal.org/u/itamar">drupal.org</a>
          </div>
        </div>
      </div>

      <div className="column details">
        {!narrow && <Summary summary={content.summary} />}
        <div className="box">
          <h2>Work experience</h2>
          <CvItems cvItems={content.jobs} />
        </div>

        <div className="box">
          <h2>Education</h2>
          <CvItems cvItems={content.education} />
        </div>

        <div className="box">
          <h2>Technologies</h2>
          <Ability
            title="Advanced"
            description={content.technologies.advanced.join(", ")}
          />{" "}
          <Ability
            title="Intermediate"
            description={content.technologies.intermediate.join(", ")}
          />
        </div>

        <div className="box">
          <h2>Languages</h2>
          <p dangerouslySetInnerHTML={{ __html: content.languages }} />
        </div>
      </div>
    </div>
  );
}

export default App;
