import React from "react";
import Card from "react-bootstrap/Card";
export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div calssName="about">
          <h2>About</h2>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </div>
        <div calssName="clear-fix" />
      </section>
    );
  }
}
