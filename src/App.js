import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

export default function App () {
  return (
    <main>
      <Navigation/>
      <AboutMe />
      <Portfolio />
      <Contact/>
      <Resume/>
    </main>
  );
}
