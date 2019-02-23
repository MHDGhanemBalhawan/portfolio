import React, { Component } from "react";
import Navigation from "./Components/Navigation.js";
import Intro from "./Components/Intro.js";
import About from "./Components/About.js";
import Skills from "./Components/Skills.js";
import "./Style/Style.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import RecentProjects from "./Components/RecentProjects.js";
import Footer from "./Components/Footer.js";
import Contact from "./Components/Contact.js";
import ContactForm from "./Components/ContactForm.js";

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Intro />
        <About />
        <Skills />
        <div className="clear-fix" />

        <RecentProjects />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
