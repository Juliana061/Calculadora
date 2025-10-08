// Importa los estilos CSS generales del proyecto
import "./styles.css";

// Importa el componente "Calculadora" desde la carpeta "componentes"
import Calculadora from "./componentes/calculadora";

// Define el componente principal de la aplicación
function App() {
  return (
    // Contenedor principal con la clase CSS "App"
    <div className="App">
      {/* Se renderiza el componente Calculadora dentro del contenedor */}
      <Calculadora />

      {/* Encabezado de la aplicación, actualmente vacío */}
      <header className="App-header"></header>
    </div>
  );
}

// Exporta el componente App para que pueda ser usado por otros archivos (por ejemplo, index.js)
export default App;
