// StratumRow.js
import React from 'react';
import Dropdown from './Dropdown';
import { useSpecies } from '../context/SpeciesContext';

function StratumRow({ stratumName }) {
  const { selectedSpecies, setSelectedSpecies } = useSpecies();
  const timePeriods = ['0-6 months', '6-18 months', '2-10 years', '10-30 years'];

  function handleSpeciesSelection(timePeriod, species) {
    setSelectedSpecies(prev => ({
      ...prev,
      [stratumName]: {
        ...prev[stratumName],
        [timePeriod]: species
      }
    }));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <h3 style={{ marginRight: '10px' }}>{stratumName}</h3>
      {timePeriods.map((timePeriod) => (
        <div key={timePeriod} style={{ margin: '0 10px' }}>
          <span>{timePeriod}</span>
          <Dropdown
            selected={selectedSpecies[stratumName] ? selectedSpecies[stratumName][timePeriod] : "Selecione..."}
            onSelect={(selectedSpecies) => handleSpeciesSelection(timePeriod, selectedSpecies)}
          />
        </div>
      ))}
    </div>
  );
}
export default StratumRow;