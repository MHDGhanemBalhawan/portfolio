import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className="contact-bg">
          <div className="container">
            <ul className="contact-list">
              <li>
                <i className="fa fa-map-marker" />
                <h6>Address</h6>
                <p>SE7 8AY, Charlton, London, UK</p>
              </li>
              <li>
                <i className="fa fa-envelope-o" />
                <h6>Email</h6>
                <p>info@modelledsoft.com</p>
              </li>
              <li>
                <i className="fa fa-mobile" />
                <h6>Mobile</h6>
                <p>
                  <img src="images/tel.png" alt="tel" />
                </p>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="row col-lg-12 col-sm-12" />
        </div>
      </section>
    );
  }
}
