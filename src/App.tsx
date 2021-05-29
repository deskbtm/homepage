import React from "react";
import "./App.css";
import { Occupy } from "./components/Occupy";
import { Footer } from "./Footer";
import { Members } from "./Members";
import { ProjectsList } from "./ProjectsList";

const App = function () {
  return (
    <div className="app">
      <Occupy height={30} />
      <header>
        <div className="app-logo">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="slogan">在这里会更加真实和兴奋</div>
        <p className="sub-slogan">一个业余软件工作室</p>
      </header>
      <Occupy height={100} />
      <main>
        <div className="projects-list">
          <ProjectsList />
        </div>
        <Members></Members>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
