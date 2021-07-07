import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos, eliminarGasto }) => {
  return (
    <div className="gastos-realizados">
      <h2>Mi Presupuesto</h2>
      {gastos.map((gasto) => (
        <Gasto gasto={gasto} key={gasto.id} eliminarGasto={eliminarGasto} />
      ))}
    </div>
  );
};

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
