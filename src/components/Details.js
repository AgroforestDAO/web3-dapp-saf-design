/* eslint-disable jsx-a11y/img-redundant-alt */
// Details.js
import React from 'react';
import { useSpecies } from '../context/SpeciesContext';

const Details = ({ style }) => {
  const { selectedSpecies } = useSpecies();

  if (!selectedSpecies) {
    return null;
  }

  const { name, stratum, occupied_space, growth_time, image } = selectedSpecies;

  return (
    <div style={style}>
      <h3>Details</h3>
      <img src={require(`../assets/${image}`)} alt={`Image of ${name}`} width={50} />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Stratum:</strong> {stratum}</p>
      <p><strong>Occupied Space:</strong> {occupied_space}</p>
      <p><strong>Growth Time:</strong> {growth_time}</p>
    </div>
  );
};

export default Details;
