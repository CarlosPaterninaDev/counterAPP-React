// Funcional components
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, numeros, subtitulo }: any) => {
  return (
    <>
      <h1>{saludo}</h1>
      <h2>{subtitulo}</h2>
      <p>Parrafo de numeros: {numeros}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  numeros: PropTypes.any,
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo default',
};

export default PrimeraApp;
