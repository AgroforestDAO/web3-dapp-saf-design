// MainSaf.js
import React, { useState } from 'react';
import Details from '../components/saf/Details';
import ListSafs from '../components/saf/ListSafs';

const MainSaf = () => {
 const [selectedSaf, setSelectedSaf] = useState(null);

 const handleSafSelect = (saf) => {
    setSelectedSaf(saf);
 };

 return (
    <div>
      {selectedSaf ? (
        <Details saf={selectedSaf} />
      ) : (
        <ListSafs onSafSelect={handleSafSelect} />
      )}
    </div>
 );
};

export default MainSaf;
