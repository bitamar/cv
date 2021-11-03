import React from "react";
// import bg from "./penrose.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={bg} className="App-logo" alt="logo" />*/}
      </header>

      <div className="column contact">
        <div className="ui card">
          <div className="clearfix">
            <img
              width="150"
              height="150"
              src="./CV _ Itamar Bar-Lev_files/itamar.jpg"
              alt="Itamar Bar-Lev"
            />
            <h2 className="title narrow-only">Itamar Bar-Lev</h2>
            <div className="extra content">
              <div className="ui list">
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
      </div>

      <div className="column details">
        <div className="ui segment wide-only">
          <h1 className="title">Itamar Bar-Lev</h1>
        </div>
        <div className="ui segment work">
          <h2>Work experience</h2>
          <div className="ui list">
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="summary workplace">
                  <a href="http://nullrefer.com/?http://www.circuitauction.com/">
                    Circuit Auction
                  </a>
                  , Tel-Aviv
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
              <i className="angle right icon" />
              <div className="content">
                <div className="summary workplace">
                  <a href="http://nullrefer.com/?https://oskberlin.com/">OSK</a>
                  , Berlin
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
              <i className="angle right icon" />
              <div className="content">
                <div className="summary workplace">
                  <a href="http://nullrefer.com/?https://www.gizra.com">
                    Gizra
                  </a>
                  , Tel-Aviv
                  <div className="date">
                    <span className="month">January</span> 2012 -{" "}
                    <span className="month">October</span> 2017
                  </div>
                  <p className="role">Team lead, Elm &amp; PHP programmer</p>
                </div>
                <div>
                  <p>
                    Was the team lead and a programmer of an early version of{" "}
                    <a href="http://nullrefer.com/?http://www.circuitauction.com/">
                      Circuit Auction
                    </a>{" "}
                    - Which is also my current employer. See above.
                  </p>
                  <br />
                  <p>
                    Also participated in building
                    <br />
                    <span>
                      <a href="http://nullrefer.com/?https://www.ethosia.co.il/">
                        Ethosia
                      </a>{" "}
                      - Tech jobs search.
                    </span>
                    <br />
                    <span>
                      <a href="http://nullrefer.com/?http://www.haskala-library.net/">
                        Haskala Library
                      </a>{" "}
                      - A book index for the Judaica Division of the Frankfurt
                      University Library.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="summary workplace">
                  <a href="http://nullrefer.com/?http://www.innstant.com">
                    Innstant
                  </a>
                  , Tel-Aviv
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
              <i className="angle right icon" />
              <div className="content">
                <div className="summary workplace">
                  <a href="http://nullrefer.com/?http://fairmas.com/">
                    Fairmas
                  </a>
                  , Berlin
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
        <div className="ui segment">
          <h2>Education</h2>
          <div className="content indented">
            <div className="summary">
              <a href="http://www.openu.ac.il/">
                The Open University of Israel
              </a>
              <div className="date">Since 2012</div>
            </div>
            <div>Studying for a B.A. in cognitive and computer sciences.</div>
          </div>
        </div>
        <div className="ui segment">
          <h2>Abilities</h2>
          <div className="ui list">
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="header">PHP &amp; MySQL</div>
                <div className="description">
                  Fluent with OO and procedural PHP, and with MySQL. Did a lot
                  of data modeling, and query optimizations.
                </div>
              </div>
            </div>
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="header">Javascript</div>
                <div className="description">
                  Experienced with AngularJs &amp; jQuery. Familiar with
                  Typescript, node &amp; express.
                </div>
              </div>
            </div>
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="header">
                  <a href="https://elm-lang.org/">Elm</a>
                </div>
                <div className="description">
                  Two years of experience with functional programming and
                  writing Elm SPAs.
                </div>
              </div>
            </div>
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="header">Drupal</div>
                <div className="description">
                  Contributed to several popular Drupal modules and profiles,
                  including Commerce-Kickstart, Commons, Organic Groups, Restful
                  and Message.
                </div>
              </div>
            </div>
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="header">HTML &amp; CSS</div>
                <div className="description">
                  Experienced with Sass, Bootstrap, Semantic UI &amp; HTML5.
                </div>
              </div>
            </div>
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                <div className="header">Etc.</div>
                <div className="description">
                  Experienced with C, Git, Apache, Jenkins, AWS, behat and
                  webdriverio tests. Most comfortable with linux. Knows a little
                  of Haskell and Java.
                </div>
              </div>
            </div>
            <div className="item">
              <i className="angle right icon" />
              <div className="content">
                Fluent in <span className="category">English</span> and{" "}
                <span className="category">Hebrew</span>. Speaks basic{" "}
                <span className="category">German</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        width="150"
        height="150"
        id="background"
        src="./CV _ Itamar Bar-Lev_files/penrose.svg"
        alt=""
      />
    </div>
  );
}

export default App;
