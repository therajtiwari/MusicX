import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryState, setLibraryState }) => {
  return (
    <nav className={`navbar ${libraryState ? "lib-selected" : ""}`}>
      <div
        className="image-container"
        style={{ maxWidth: "125px", float: "left" }}
      >
        <img
          src="assets/images/logo/musicx_cover_logo.png"
          alt="MusicX Logo"
          style={{ width: "100%" }}
        />
      </div>
      <button
        onClick={() => {
          setLibraryState(!libraryState);
        }}
      >
        Library
        <FontAwesomeIcon
          icon={faMusic}
          size="1x"
          style={{ marginLeft: "5px" }}
        ></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
