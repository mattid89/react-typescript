import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormikComponentForm from "./Components/FormikComponentForm";
import { UseContextApp } from "./UseContextApp";
import { BrowserRouter } from "react-router-dom";
// import FormikForm from "./Components/FormikForm";
// import Formulario from "./Components/Formulario";

const App = () => {
  return (
    // <>
    //   <div className="flex-column">
    //     {/* <div className="flex-row">
    //       <ContadorReduced />
    //       <ButtonHttpRequest />
    //     </div> */}
    //     <hr />
    //     <div className="flex-row">
    //       <FormikComponentForm />
    //       {/* <FormikForm /> */}
    //       {/* <Formulario /> */}
    //     </div>
    //   </div>
    // </>

    <BrowserRouter>
      <UseContextApp />
    </BrowserRouter>
  );
};

export default App;
