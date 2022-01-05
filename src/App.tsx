import React from 'react';
import './App.css';
import ContadorReducer from './Components/ContadorReducer/ContadorReducer';

function App() {
    return (
        <>

            <div className="padding flex-row">

                <ContadorReducer />
                <ContadorReducer />

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

            {/* 
                <div className="padding flex-row">
                    <MyCard></MyCard>
                </div> 
            */}
        </>
    );
}

export default App;
