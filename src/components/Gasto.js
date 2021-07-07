import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto, eliminarGasto }) => {
  return (
    <div className="gastos">
      <li>
        <p>
          {gasto.nombre}
          <span className="gasto">${gasto.cantidad}</span>
        </p>
      </li>
      <button
        className="alert-danger u-full-width eliminar"
        onClick={() => eliminarGasto(gasto.id)}
      >
        Eliminar Gasto
      </button>
    </div>
  );
};

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};
export default Gasto;
