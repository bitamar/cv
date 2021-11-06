import React from "react";
import { debounce } from "lodash";
import bg from "./penrose.svg";
import itamarSmall from "./itamar122.webp";
import itamarLarge from "./itamar376.webp";
import "./App.scss";

function App(): JSX.Element {
  const isNarrow = (width: number) => width <= 1000;
  // eslint-disable-next-line
  const [displayBg, setDisplayBg] = React.useState(true);
  const [narrow, setNarrow] = React.useState(isNarrow(window.innerWidth));

  React.useEffect(() => {
    const debounced = debounce(() => {
      setDisplayBg(true);
    }, 200);

    const handleResize = () => {
      setDisplayBg(false);
      debounced();

      if (isNarrow(window.innerWidth) !== narrow) {
        setNarrow(isNarrow(window.innerWidth));
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
        className={!displayBg ? "hidden" : "fade-in"}
      />
      <div className="column contact">
        <div className="card">
          {narrow ? (
            <>
              <img
                width="61"
                height="61"
                src={itamarSmall}
                alt="Itamar Bar-Lev"
              />
              <h1>Itamar Bar-Lev</h1>
            </>
          ) : (
            <img
              width="188"
              height="188"
              src={itamarLarge}
              alt="Itamar Bar-Lev"
            />
          )}

          <div className="extra content">
            <div className="list">
              <div className="item">
                <a href="mailto:bitamar@gmail.com">bitamar@gmail.com</a>
              </div>
              <div className="item">
                <a href="tel:+972-54-9400041">+972-54-9400041</a>
              </div>
              <div className="item">
                <a href="https://github.com/bitamar">GitHub</a>
              </div>
              <div className="item">
                <a href="https://www.drupal.org/u/itamar">drupal.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="column details">
        {!narrow && (
          <div className="segment">
            <h1>Itamar Bar-Lev</h1>
          </div>
        )}
        <div className="segment work">
          <h2>Work experience</h2>
          <div className="list">
            <div className="item">
              <i />
              <div className="content">
                <div className="summary workplace">
                  <span className="title">Circuit Auction</span>
                  <div className="date">
                    Since <span className="month">March</span> 2018
                  </div>
                  <p className="role">Full stack developer</p>
                </div>
                <div>
                  <p>
                    Making software for auction houses management. Handling the
                    online/ room bidding, catalog website, back office &amp; low
                    latency live video broadcasting.
                  </p>
                  <p>
                    Currently responsible in part for re-modeling and for data
                    migrations from other systems, to adjust the system for new
                    customers.
                    <br />
                    Programming mainly in PHP and Elm. Doing CI with phpunit and
                    webdriverio tests. Doing queuing work with jenkins.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="summary workplace">
                  <span className="title">OSK Berlin</span>
                  <div className="date">
                    <span className="month">October</span> 2017 -{" "}
                    <span className="month">March</span> 2018
                  </div>
                  <p className="role">Backend developer</p>
                </div>
                <div>
                  <p>
                    Worked on a drupal based dashboard comparing social media
                    influencers for the Mercedes division in Daimler.
                  </p>
                  <p>
                    Was responsible for refactoring the system, and for
                    introducing CI, tests and code reviews.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="summary workplace">
                  <span className="title">Gizra</span>
                  <div className="date">
                    <span className="month">January</span> 2012 -{" "}
                    <span className="month">October</span> 2017
                  </div>
                  <p className="role">Team lead, Elm &amp; PHP programmer</p>
                </div>
                <div>
                  <p>
                    Was the team lead and a programmer of an early version of
                    <span>Circuit Auction</span> - Which is also my current
                    employer. See above.
                  </p>
                  <br />
                  <p>
                    Also participated in building
                    <br />
                    <span>Ethosia - Tech jobs search.</span>
                    <br />
                    <span>
                      Haskala Library - A book index for the Judaica Division of
                      the Frankfurt University Library.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="summary workplace">
                  <span className="title">Innstant</span>
                  <div className="date">
                    <span className="month">May</span> 2011 -{" "}
                    <span className="month">January</span> 2012
                  </div>
                  <p className="role">PHP programmer</p>
                </div>
                <div>
                  <p>
                    Worked on an hotel search website, built with Zend
                    framework.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="summary workplace">
                  <span className="title">Fairmas</span>
                  <div className="date">
                    <span className="month">June</span> 2008 -{" "}
                    <span className="month">May</span> 2011
                  </div>
                  <p className="role">PHP programmer</p>
                </div>
                <div>
                  <p>
                    Worked on an hotels performance comparison system for hotel
                    chains, built with a proprietary MVC framework.
                    <br />
                    Designed a configuration system for creating new reports.
                    Was responsible for maintenance and adjustments for new
                    hotels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="segment">
          <h2>Education</h2>
          <div className="content">
            <div className="summary">
              The Open University of Israel
              <div className="date">Since 2012</div>
            </div>
            <div>Studying for a B.A. in cognitive and computer sciences.</div>
          </div>
        </div>
        <div className="segment">
          <h2>Abilities</h2>
          <div className="list">
            <div className="item">
              <i />
              <div className="content">
                <div className="header">PHP &amp; MySQL</div>
                <p className="description">
                  Fluent with OO and procedural PHP, and with MySQL. Did a lot
                  of data modeling, and query optimizations.
                </p>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="header">Javascript</div>
                <p className="description">
                  Experienced with AngularJs &amp; jQuery. Familiar with
                  Typescript, node &amp; express.
                </p>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="header">
                  <a href="https://elm-lang.org/">Elm</a>
                </div>
                <p className="description">
                  Two years of experience with functional programming and
                  writing Elm SPAs.
                </p>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="header">Drupal</div>
                <p className="description">
                  Contributed to several popular Drupal modules and profiles,
                  including Commerce-Kickstart, Commons, Organic Groups, Restful
                  and Message.
                </p>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="header">HTML &amp; CSS</div>
                <p className="description">
                  Experienced with Sass, Bootstrap, Semantic UI &amp; HTML5.
                </p>
              </div>
            </div>
            <div className="item">
              <i />
              <div className="content">
                <div className="header">Etc.</div>
                <p className="description">
                  Experienced with C, Git, Apache, Jenkins, AWS, behat and
                  webdriverio tests. Most comfortable with linux. Knows a little
                  of Haskell and Java.
                </p>
              </div>
            </div>
            <div className="item">
              <i />
              <p className="content">
                Fluent in <b>English</b> and <b>Hebrew</b>. Speaks basic{" "}
                <b>German</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
