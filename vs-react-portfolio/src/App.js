import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css";


function App() {
  return (
    <div>
      <main>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;