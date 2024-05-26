import React, { useState } from 'react';

function ColorToggle() {
  // Definir el estado inicial del color
  const [isToggled, setIsToggled] = useState(false);

  // Función para manejar el cambio de color
  const toggleColor = () => {
    setIsToggled(prevState => !prevState);
  };

  // Definir los estilos en línea basados en el estado del color
  const divStyle = {
    backgroundColor: isToggled ? 'blue' : 'yellow', // Cambia entre dos colores
    padding: '20px',
    textAlign: 'center',
    color: 'black',
  };

  return (
    <div style={divStyle}>
      <p>El color de fondo esta {isToggled ? 'Apagado' : 'Encendido'}</p>
      <button onClick={toggleColor}>{isToggled ? 'ON' : 'OFF'} </button>
    </div>
  );
}

export default ColorToggle;