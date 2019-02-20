import React from "react";
import ReactDOM from "react-dom";
export default class Services extends React.Component {
  render() {
    return (
      <section id="services">
        <div className="services">
          <div className="container-sm">
            <h2>Services</h2>
          </div>
          <div className="services-list-bg">
            <ul className="services-list container">
              <li className="service media">
                <h5>Web Design</h5>
                <p>Reponsive web designs with the latest technology.</p>
                <span className="service-divier" />
              </li>
              <li className="service web">
                <h5>Graphic Designs</h5>
                <p>Photoshop & Macromedia Flash.</p>

                <span className="service-divier" />
              </li>
              <li className="service databases">
                <h5>Database Design</h5>
                <p>Databases Designs using MySQL, SQL Server and MS Access</p>
                <span className="service-divier" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
