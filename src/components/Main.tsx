import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ramon-PR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ramon-pozuelo-ruiz/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ramón Pozuelo</h1>
          {/* <p>MSc Aerospace Eng. | PhD Eng. Mechanics | PostDoc ML & AI</p> */}
          {/* <p>PhD Eng. Mechanics | MSc Aerospace Eng. | PostDoc ML & AI</p> */}
          <p>Aerospace & Mechanical Engineer | ML & AI</p>


          <div className="mobile_social_icons">
            <a href="https://github.com/Ramon-PR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ramon-pozuelo-ruiz/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;