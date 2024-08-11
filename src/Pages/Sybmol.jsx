import React from "react";
import "./symbol.css";
import PropTypes from "prop-types";

const Sybmol = (props) => {
  const { username, linkedIn, name } = props;

  return (
    <>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">M</div>
              <div className="details">
                <div className="name">{name}</div>
                <div className="username">{username}</div>
              </div>
            </div>
            <div className="about">350+ Connections</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" href="https://www.linkedin.com/{linkedIn}">
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab fa-linkedin">
                <svg viewBox="0 0 448 512" height="1em">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </span>
            </div>
            <div className="text">{linkedIn}</div>
          </a>
        </div>
      </div>
    </>
  );
};

Sybmol.defaultProps = {
  name: "",
};

Sybmol.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};
export default Sybmol;
