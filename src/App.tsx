import React from 'react';
import Prueba from './Components/Prueba/Prueba';
import './App.css';

function App() {
  return (
    <>
      <div className="padding flex-row">

          <Prueba title={'Título de prueba'}>
            <p>Texto children!!</p>
          </Prueba>

          {/* <Prueba>
            <p>Texto children con default prop!!</p>
          </Prueba>

          <Prueba title={'Tarjeta'}>
            <p>Sigo probando ...</p>
          </Prueba> */}

      </div>

      {/* <div className="padding flex-row">
        <MyCard></MyCard>
      </div> */}
    </>
  );
}

export default App;
