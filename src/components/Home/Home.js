import React from "react";

import Hero from "./Hero";
import MyWork from "./Work/Work";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <MyWork />
        <AboutMe />
        <ContactMe />
      </div>
    </>
  );
}
export default Home;
