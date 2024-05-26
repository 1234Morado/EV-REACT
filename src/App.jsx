import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Formulario from './components/Formulario'
import logo from './assets/img/logo-doñabetty.jpeg'
import TemaColor from './components/TemaColor'


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    window.open('https://calculadora-peach-kappa.vercel.app/', '_blank');
  };
  


  return (
    <>
    <body>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <img src={logo} />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h2>
          Aplicacion en React Js
        </h2>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Formulario />
        <br />
      </div>
      <br />
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <button onClick={handleClick}>Abrir Calculadora</button>
      </div>
      <br />
      <TemaColor />
      <br />
      
    </body>
    </>
  )
}

export default App
