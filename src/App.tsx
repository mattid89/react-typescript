import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { UseContextApp } from "./UseContextApp";

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

    // <div>
    //   <label>
    //     Elige algo
    //     <input list="lista" />
    //   </label>
    //   <datalist id="lista">
    //     <option value="lala"></option>
    //     <option value="lele"></option>
    //     <option value="lolo"></option>
    //     <option value="lulu"></option>
    //     <option value="lili"></option>
    //     <option value="liso"></option>
    //   </datalist>
    // </div>

    <BrowserRouter>
      <UseContextApp />
    </BrowserRouter>

    // <ZustandApp />
  );
};

export default App;
