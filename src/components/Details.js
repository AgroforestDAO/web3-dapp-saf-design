/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Details = ({ species, style }) => {
  if (!species) {
    return null;
  }

  const { name, stratum, occupied_space, growth_time, image } = species;

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
