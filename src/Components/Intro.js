import React from "react";
import { Container } from "reactstrap";
export default class Intro extends React.Component {
  render() {
    return (
      <Container
        className="intro"
        fluid
        style={{
          backgroundImage: "url(images/web.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundsize: "95% 95%",
          animationname: "fadeInOpacity",
          animationiterationcount: "1",
          animationtimingfunction: "ease-in",
          animationduration: "5s"
        }}
      >
        <div className="intro-headings">
          <h1>Mohamad Balhawan</h1>
          <h4>Professional Designs</h4>
        </div>
      </Container>
    );
  }
}
