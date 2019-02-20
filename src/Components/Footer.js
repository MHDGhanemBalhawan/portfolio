import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul className="social-btn-list clear-fix">
          <li>
            <a
              href="https://twitter.com/modelledsoft"
              className="twitter"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://aboutme.google.com/b/108223992877131638024/"
              className="google-plus"
              target="_blank"
            >
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/modelledsoft/"
              className="facebook"
              target="_blank"
            >
              <i className="fa fa-facebook" />
            </a>
          </li>
        </ul>
        <p>&copy Modelled Soft. All rights reserved.</p>
      </footer>
    );
  }
}
