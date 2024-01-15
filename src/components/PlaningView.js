import React from 'react';

function PlaningView({ savedData, stratumNames, timePeriods }) {
  return (
    <div>
      <h2>Dados salvos:</h2>
      <table>
        <thead>
          <tr>
            <th></th>
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
                  {savedData[stratumName] &&
                  savedData[stratumName][timePeriod] !== undefined
                    ? savedData[stratumName][timePeriod].name // Ajuste para a propriedade que deseja exibir
                    : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlaningView;
