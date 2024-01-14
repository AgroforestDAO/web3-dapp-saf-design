// SafPlaning.js
import React, { useState } from 'react';
import StratumRow from './StratumRow';
import { SpeciesProvider } from '../context/SpeciesContext';

function SafPlaning() {
  const [selectedSpecies, setSelectedSpecies] = useState({
    Emergente: {
      '0-6 months': null,
      '6-18 months': null,
      '2-10 years': null,
      '10-30 years': null
    },
    Alto: {
      '0-6 months': null,
      '6-18 months': null,
      '2-10 years': null,
      '10-30 years': null
    },
    Médio: {
      '0-6 months': null,
      '6-18 months': null,
      '2-10 years': null,
      '10-30 years': null
    },
    Baixo: {
      '0-6 months': null,
      '6-18 months': null,
      '2-10 years': null,
      '10-30 years': null
    }
  });

  function handleSave() {
    // Aqui você pode lidar com a lógica de salvar as seleções do usuário
    console.log(selectedSpecies);
  }

  return (
    <SpeciesProvider value={{ selectedSpecies, setSelectedSpecies }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <StratumRow stratumName="Emergente" />
        <StratumRow stratumName="Alto" />
        <StratumRow stratumName="Médio" />
        <StratumRow stratumName="Baixo" />
      </div>
      <button onClick={handleSave} style={{ marginTop: '10px' }}>Salvar</button>
    </SpeciesProvider>
  );
}

export default SafPlaning;