// MainSaf.js
import React, { useState } from 'react';
import Details from './Details';
import ListSafs from './ListSafs';
import style from "../../styles/styles";

const MainSaf = () => {
 const [selectedSaf, setSelectedSaf] = useState(null);

 const handleSafSelect = (saf) => {
    setSelectedSaf(saf);
 };

 return (
    <div style={style.app}>
      {selectedSaf ? (
        <Details saf={selectedSaf} />
      ) : (
        <ListSafs onSafSelect={handleSafSelect} />
      )}
    </div>
 );
};

export default MainSaf;
