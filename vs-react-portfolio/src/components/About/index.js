import React from "react";
import coverImage from "/Users/vanessasylverain/Desktop/My-React-Portfolio/VS-React-Portfolio/vs-react-portfolio/src/assets/cover/coverimage.jpeg";
import headShot from "//Users/vanessasylverain/Desktop/My-React-Portfolio/VS-React-Portfolio/vs-react-portfolio/src/assets/cover/headshot.jpeg";

const About = () => {
    return (
        <><div className="container-fluid">
        <div className="a" id="about">
          <div className="row">
            <div className="col-md-6">
              <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                  <img src={headShot} alt="" className="a-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><section className="my-5">
          <h1 id="about">About Me</h1>
          <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover" />
          <div className="my-2">
            <p>
              In 2012, I embarked on my journey to become a Nursing Home Administrator but later realizing that I have an affinity for technology and asthetics. I decided to take a leap of faith and working towards a career that allows me to utilize my leadership strengths as well as my tactical skills.
            </p>
          </div>
        </section></>
  );
}

export default About;
