// Importa el hook useState de React para manejar estados en el componente
import { useState } from "react";

// Importa un componente llamado "Button" (aunque en este código no se usa)
import Button from "./button";

// Define el componente funcional "Calculadora"
const Calculadora = () => {
  // Estado para mostrar los números en pantalla
  const [pantalla, setPantalla] = useState("0");

  // Estado que guarda el primer número antes de realizar una operación
  const [guardado, setGuardado] = useState(null);

  // Estado que almacena el tipo de operación seleccionada (+, -, *, /)
  const [operacion, setOperacion] = useState(null);

  // -----------------------------
  // FUNCIÓN: número(n)
  // Maneja la entrada de dígitos o el punto decimal
  // -----------------------------
  function numero(n) {
    // Si la pantalla muestra "0" y se ingresa otro número, reemplaza el "0"
    if (pantalla === "0" && n !== ".") {
      setPantalla(String(n));
    }
    // Evita escribir dos puntos seguidos (por ejemplo: "3.1.")
    else if (n === "." && pantalla.includes(".")) {
      return; // No hace nada si ya hay un punto
    }
    // Si no se cumple lo anterior, concatena el nuevo número a la pantalla
    else {
      setPantalla(pantalla + String(n));
    }
  }

  // -----------------------------
  // FUNCIÓN: operador(op)
  // Guarda el número actual y la operación elegida (+, -, *, /)
  // -----------------------------
  function operador(op) {
    setGuardado(Number(pantalla)); // Guarda el número actual como base
    setOperacion(op); // Guarda el operador seleccionado
    setPantalla("0"); // Reinicia la pantalla para ingresar el segundo número
  }

  // -----------------------------
  // FUNCIÓN: igual()
  // Calcula el resultado de la operación seleccionada
  // -----------------------------
  function igual() {
    // Si no hay un número guardado o una operación seleccionada, no hace nada
    if (guardado === null || !operacion) return;

    const n2 = Number(pantalla); // Convierte el valor actual en número
    let res = 0; // Variable para almacenar el resultado

    // Verifica qué operación se seleccionó y la ejecuta
    if (operacion === "+") res = guardado + n2;
    if (operacion === "-") res = guardado - n2;
    if (operacion === "*") res = guardado * n2;
    if (operacion === "/") res = n2 !== 0 ? guardado / n2 : "Error"; // Maneja división por cero

    // Muestra el resultado en la pantalla y limpia los valores guardados
    setPantalla(String(res));
    setGuardado(null);
    setOperacion(null);
  }

  // -----------------------------
  // FUNCIÓN: reset()
  // Reinicia toda la calculadora
  // -----------------------------
  function reset() {
    setPantalla("0");
    setGuardado(null);
    setOperacion(null);
  }

  // -----------------------------
  // RENDERIZADO DEL COMPONENTE
  // -----------------------------
  return (
    <div className="calculadora">
      {/* Pantalla que muestra los números o resultados */}
      <div className="pantalla">{pantalla}</div>

      {/* Contenedor de los botones */}
      <div className="botones">
        {/* Fila 1: funciones básicas */}
        <button className="gris" onClick={reset}>
          C
        </button>
        <button className="gris">+/-</button>
        <button className="gris">%</button>
        <button className="operacion" onClick={() => operador("/")}>
          ÷
        </button>

        {/* Fila 2 */}
        <button onClick={() => numero(7)}>7</button>
        <button onClick={() => numero(8)}>8</button>
        <button onClick={() => numero(9)}>9</button>
        <button className="operacion" onClick={() => operador("*")}>
          ×
        </button>

        {/* Fila 3 */}
        <button onClick={() => numero(4)}>4</button>
        <button onClick={() => numero(5)}>5</button>
        <button onClick={() => numero(6)}>6</button>
        <button className="operacion" onClick={() => operador("-")}>
          −
        </button>

        {/* Fila 4 */}
        <button onClick={() => numero(1)}>1</button>
        <button onClick={() => numero(2)}>2</button>
        <button onClick={() => numero(3)}>3</button>
        <button className="operacion" onClick={() => operador("+")}>
          +
        </button>

        {/* Fila 5 */}
        <button className="cero" onClick={() => numero(0)}>
          0
        </button>
        <button onClick={() => numero(".")}>.</button>
        <button className="operacion" onClick={igual}>
          =
        </button>
      </div>
    </div>
  );
};

// Exporta el componente para usarlo en otros archivos (por ejemplo App.jsx)
export default Calculadora;
