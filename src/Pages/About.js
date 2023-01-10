import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
                I am a full stack developer and web designer. I enjoy solving
                design problems, developing new features and designing
                prototypes using different media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
