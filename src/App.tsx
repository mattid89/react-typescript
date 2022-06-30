import React from "react";
import "./App.css";
import Formulario from "./Components/Formulario";

const App = () => {
  return (
    <>
    <div className="flex-column">

      <div className="flex-row">
        {/* <ContadorReducer />
        <ButtonHttpRequest /> */}

        {/* <Prueba title={'Título de prueba'}>
                    <p>Texto children!!</p>
                    </Prueba>

                    <Prueba>
                    <p>Texto children con default prop!!</p>
                    </Prueba>

                    <Prueba title={'Tarjeta'}>
                    <p>Sigo probando ...</p>
                    </Prueba> 
                */}
      </div>

      <div className="flex-row">
        <Formulario />
      </div>
    </div>

      {/* 
                <div className="padding flex-row">
                    <MyCard></MyCard>
                </div> 
            */}
    </>
  );
};

export default App;
