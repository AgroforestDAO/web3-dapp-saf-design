// GrowingLine.jsx
import React from 'react';

const GrowingLine = ({ children, spacing, onSave }) => (
  <div style={{ ...styles.plantingArea, width: spacing }}>
    {children}
    <button onClick={onSave}>Save</button>
  </div>
);

const styles = {
  plantingArea: {
    marginRight: '5px',
    border: '1px solid black',
    padding: '5px',
  },
};

export default GrowingLine;

