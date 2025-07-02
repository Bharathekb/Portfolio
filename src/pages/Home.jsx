import React from "react";
import Header from "../components/Header";
import Aboutme from "../components/Aboutme";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Aboutme />
        <Skills />
        <Experience />
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
