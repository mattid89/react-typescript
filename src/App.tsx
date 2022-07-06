import React from "react";
import "./App.css";
import FormikForm from "./Components/FormikForm";
import Formulario from "./Components/Formulario";

const App = () => {
  return (
    <>
    <div className="flex-column">

      <div className="flex-row">
        {/* <ContadorReducer />
        <ButtonHttpRequest /> */}
        <FormikForm />
      </div>
        <hr />
      <div className="flex-row">
        <Formulario />
      </div>
    </div>

    </>
  );
};

export default App;
