import React from "react";
import Dropdown from "./Dropdown";

const Sidebar = ({ onSpeciesChange }) => {
  return (
    <div style={styles.sidebar}>
      <h3>Tools</h3>
      <div>
        <label>Select 3 species...</label>
        <Dropdown onSpeciesChange={onSpeciesChange} />
        <Dropdown onSpeciesChange={onSpeciesChange} />
        <Dropdown onSpeciesChange={onSpeciesChange} />
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: "0",
    width: "200px",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    overflow: "auto",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    marginBottom: "10px",
  },
};

export default Sidebar;
