import React from 'react';

import './App.css';
import Prueba from './Components/Prueba/Prueba';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Prueba title={'Título de prueba'}>
          <p>Texto children!!</p>
        </Prueba>
<br />
        <Prueba>
          <p>Texto children con default prop!!</p>
        </Prueba>

      </header>

    </div>
  );
}

export default App;
