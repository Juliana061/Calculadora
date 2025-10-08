// ===============================
// Componente funcional "Button"
// ===============================

// Este componente es un botón reutilizable que recibe:
// - onClick: una función que se ejecuta al hacer clic.
// - children: el contenido que se muestra dentro del botón (por ejemplo, un número o símbolo).
// - ...props: permite pasar cualquier otro atributo adicional (como className, id, etc.)
const Button = ({ onClick, children, ...props }) => (
  // Crea un botón HTML que ejecuta la función onClick cuando se presiona
  // y aplica las demás propiedades que reciba desde el componente padre
  <button onClick={onClick} {...props}>
    {/* children representa el contenido visible del botón */}
    {children}
  </button>
);

// Exporta el componente para poder usarlo en otros archivos
export default Button;
