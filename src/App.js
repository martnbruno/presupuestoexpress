import { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  // useEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      // Agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);
      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      // Resetear a false despues de ejecutar guardarGastos
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  // Funcion que elimina un gasto.
  const eliminarGasto = (id) => {
    const nuevosGastos = gastos.filter((gasto) => gasto.id !== id);
    guardarGastos(nuevosGastos);
  };

  return (
    <div className="App">
      <div className="container"></div>
      <header>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="twelve columns">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="twelve columns">
                <Listado gastos={gastos} eliminarGasto={eliminarGasto} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
