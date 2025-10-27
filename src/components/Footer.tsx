import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/srimanbca" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/sriman-b-047078341" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p> Customized by Sriman B with 💜</p>
    </footer>
  );
}

export default Footer;