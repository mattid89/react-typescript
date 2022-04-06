import React from 'react';
import './App.css';
import ContadorReducer from 'src/Components/ContadorReducer/ContadorReducer';
import ButtonHttpRequest from './Components/button-http-request/button-http-request';

function App() {
    return (
        <>

            <div className="flex-row">

                <ContadorReducer />
                <ContadorReducer />

                <ButtonHttpRequest />

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
