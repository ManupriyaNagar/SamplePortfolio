import React from "react";
import PropTypes from "prop-types";
import Sybmol from "../Pages/Sybmol";
import S2 from "../Pages/S2";

// import devDotToIcon from "../images/socials/devdotto.svg";
// import envelopeIcon from "../images/socials/envelope.svg";
// import gitHubIcon from "../images/socials/github.svg";
// import instagramIcon from "../images/socials/instagram.svg";
// import linkedInIcon from "../images/socials/linkedin.svg";
// import mediumIcon from "../images/socials/medium.svg";
// import twitterIcon from "../images/socials/twitter.svg";
// import youTubeIcon from "../images/socials/youtube.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: "#005289",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Sybmol />
        <S2 />
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by Manupriya Nagar
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
