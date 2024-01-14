import React from 'react';

const NavBar = () => {
  return (
    <div style={{ backgroundColor: '#617c59', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo à esquerda */}
      <div>
        <img src={require(`../assets/logo_agroforestDAO_round.png`)} alt="Logo" style={{ maxWidth: '130px', maxHeight: '60px', marginLeft: '10px' }} />
      </div>

      {/* Links à direita */}
      {/* <div>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div> */}
    </div>
  );
};

export default NavBar;
