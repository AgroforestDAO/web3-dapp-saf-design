import React from 'react';

// Componente de Planta
const Plant = ({ image, isSelected }) => (
  <img
    src={require(`../assets/${image}`)}
    alt="planta"
    style={{
      border: isSelected ? '2px solid blue' : 'none',
      width: '50px', // Set the width as needed
      // Customize other styles for the Plant component
    }}
  />
);

// Componente de Espaçamento
const PlantingArea = ({ children, spacing }) => (
  <div style={{ ...styles.plantingArea, width: spacing }}>
    {children}
  </div>
);

// Componente de Diagrama de Plantio
class PlantingDiagram extends React.Component {
  render() {
    const { selectedSpecies } = this.props;

    return (
      <div style={styles.plantingDiagram}>
        {/* Horizontal row with 10 PlantingAreas */}
        {[...Array(10)].map((_, colIndex) => (
          <PlantingArea key={colIndex} spacing="100px">
            {selectedSpecies && (
              <Plant
                image={selectedSpecies.image}
                isSelected={selectedSpecies === colIndex}
              />
            )}
          </PlantingArea>
        ))}
      </div>
    );
  }
}

const styles = {
  plantingDiagram: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', // Center the PlantingAreas horizontally
    marginTop: '20px',
  },
  plantingArea: {
    marginRight: '5px',
    border: '1px solid black',
    padding: '5px',
  },
};

export default PlantingDiagram;
