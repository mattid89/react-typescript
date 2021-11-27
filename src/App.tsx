import React from 'react';

import './App.css';
import MyCard from './Components/MyCard/MyCard';
import Prueba from './Components/Prueba/Prueba';

function App() {
  return (
    <>
      <div className="padding flex-row">

          <Prueba title={'Título de prueba'}>
            <p>Texto children!!</p>
          </Prueba>

          <Prueba>
            <p>Texto children con default prop!!</p>
          </Prueba>

          <Prueba title={'Tarjeta'}>
            <p>Sigo probando ...</p>
          </Prueba>

      </div>

      <div className="padding flex-row">
        <MyCard></MyCard>
      </div>
    </>
  );
}

export default App;
