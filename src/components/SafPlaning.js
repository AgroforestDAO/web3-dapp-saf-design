import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { SpeciesProvider } from '../context/SpeciesContext';

function SafPlaning() {
  const [selectedSpecies, setSelectedSpecies] = useState({});
  const [savedData, setSavedData] = useState({});

  const stratumNames = ["Emergente", "Alto", "Médio", "Baixo"];
  const timePeriods = ['0-6 meses', '6-18 meses', '2-10 years', '10-30 years'];

  function handleSpeciesSelection(stratumName, timePeriod, species) {
    setSelectedSpecies(prev => ({
      ...prev,
      [stratumName]: {
        ...prev[stratumName],
        [timePeriod]: species
      }
    }));
  }

  function handleSave() {
   setSavedData(selectedSpecies);
  }

  return (
    <SpeciesProvider value={{ selectedSpecies, setSelectedSpecies }}>
      
      <div style={styles.container}>
        <table style={styles.table}>
        <thead>
          <tr>
            <th>Estratos</th>
            {timePeriods.map((timePeriod) => (
              <th key={timePeriod}>{timePeriod}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stratumNames.map((stratumName) => (
            <tr key={stratumName}>
              <td>{stratumName}</td>
              {timePeriods.map((timePeriod) => (
                <td key={timePeriod}>
                  <Dropdown
                    selected={selectedSpecies[stratumName] ? selectedSpecies[stratumName][timePeriod] : null}
                    onSelect={(species) => handleSpeciesSelection(stratumName, timePeriod, species)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave} style={{ marginTop: '10px' }}>Salvar</button>
      {savedData && (
        <div>
          <h2>Dados salvos:</h2>
          <pre>{JSON.stringify(savedData, null, 2)}</pre>
        </div>
      )}
      </div>
    </SpeciesProvider>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px', // Adjust the margin as needed
  },
  table: {
    borderCollapse: 'collapse',
    width: '80%', // Adjust the width as needed
  },
  button: {
    marginTop: '10px',
  },
};

export default SafPlaning;
