import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/srimanprofile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Sriman B - Full Stack Developer" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/SrimanBalu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sriman-b-04707831a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/_sri_thala_007_?igsh=MXgxaGE0NnRiMHphbQ==" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Sriman B</h1>
          <p>Full Stack Developer</p>
          <div className="objective">
            <p>Motivated BCA graduate specializing in software development and web technologies, seeking a Full Stack Developer role to build scalable, user-focused solutions.</p>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/srimanbca" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sriman-b-04707831a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;