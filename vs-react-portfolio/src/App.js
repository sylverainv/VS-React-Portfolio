import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css";
import Footer from "./components/footer";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Nav />
        {/* <ScrollToTop /> */}
        <link>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/" element={<About />} />
          <Route exact path="/" element={<Resume />} />
          <Route exact path="/" element={<Contact/>} />
        </link>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

