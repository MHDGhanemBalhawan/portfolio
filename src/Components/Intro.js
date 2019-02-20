import React from "react";

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <section id="intro">
          <div className="intro">
            <div className="container">
              <div className="intro-headings">
                <h1>Mohamad Balhawan</h1>
                <h4>Professional Designs</h4>
              </div>
            </div>
            <a href="#about" className="continue-btn">
              Continue
            </a>
          </div>
        </section>
        <div calssName="clearfix" />
      </div>
    );
  }
}
