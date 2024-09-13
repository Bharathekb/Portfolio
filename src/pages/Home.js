import React from "react";
import Header from "../components/Header";
import Aboutme from "../components/Aboutme";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
function Home() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Aboutme />
        <Skills />
        <Experience />
      </main>
      <br /> <br /> <br />
    </div>
  );
}

export default Home;
