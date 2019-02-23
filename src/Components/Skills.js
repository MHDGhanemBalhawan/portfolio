import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Skills</h3>
                <p className="subtitle-a">
                  My skills include frontend and backend.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h2>Frontend</h2>
              <h3>HTML5</h3>
              <ProgressBar variant="success" animated now={80} label="80" />

              <h3>CSS3</h3>
              <ProgressBar variant="success" animated now={80} label="80" />
              <h3>JavaSript</h3>
              <ProgressBar variant="success" animated now={70} label="70" />
              <h3>Node, React</h3>
              <ProgressBar variant="info" animated now={50} label="50" />
            </div>
            <div className="col-sm-4">
              <h2>Backend</h2>
              <h3>MySQL</h3>
              <ProgressBar variant="warning" animated now={70} label="70" />
              <h3>SQL</h3>
              <ProgressBar variant="warning" animated now={70} label="70" />
              <h3>PostgresSQL</h3>
              <ProgressBar variant="warning" animated now={70} label="70" />
              <h3>MongoDB.</h3>
              <ProgressBar variant="warning" animated now={50} label="50" />
            </div>
            <div className="col-sm-4">
              <h2>Graphic Designs</h2>
              <h3>Photoshop & GIMP.</h3>
              <ProgressBar variant="danger" animated now={60} label="60" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
