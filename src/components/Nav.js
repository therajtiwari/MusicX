import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryState, setLibraryState }) => {
  return (
    <nav className={`navbar ${libraryState ? "lib-selected" : ""}`}>
      <h2>Buzzz Player</h2>
      <button
        onClick={() => {
          setLibraryState(!libraryState);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} size="1x"></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
