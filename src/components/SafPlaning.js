import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { SpeciesProvider } from '../context/SpeciesContext';
import PlaningView from './PlaningView';
import image from '../assets/Tempo.jpeg';

function SafPlaning() {
  const [selectedSpecies, setSelectedSpecies] = useState({});
  const [savedData, setSavedData] = useState({});

  const stratumNames = ["Emergente", "Alto", "Médio", "Baixo"];
  const timePeriods = ['0-6 meses', '6-18 meses', '2-10 anos', '10-30 anos']; // Corrigindo o valor de '2-10 years'

  function handleSpeciesSelection(stratumName, timePeriod, species) {
    setSelectedSpecies((prev) => ({
      ...prev,
      [stratumName]: {
        ...prev[stratumName],
        [timePeriod]: species,
      },
    }));
  }

  function handleSave() {
    setSavedData(selectedSpecies);
  }

  return (
    <SpeciesProvider value={{ selectedSpecies, setSelectedSpecies }}>
      <div style={styles.container}>
      <img src={image} alt="Descrição da imagem" style={{ width: '69%' }} />
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
                      selected={
                        selectedSpecies[stratumName]
                          ? selectedSpecies[stratumName][timePeriod]
                          : null
                      }
                      onSelect={(species) =>
                        handleSpeciesSelection(stratumName, timePeriod, species)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSave} style={{ marginTop: '10px' }}>
          Salvar
        </button>
        {savedData && <PlaningView savedData={savedData} stratumNames={stratumNames} timePeriods={timePeriods} />} {/* Adicionando timePeriods como propriedade */}
      </div>
    </SpeciesProvider>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '40px' // Ajuste a margem conforme necessário
  },
  table: {
    borderCollapse: 'collapse',
    width: '80%', // Ajuste a largura conforme necessário
  },
  button: {
    marginTop: '10px',
  },
};

export default SafPlaning;
