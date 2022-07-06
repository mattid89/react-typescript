import "./App.css";
import FormikForm from "./Components/FormikForm";
// import Formulario from "./Components/Formulario";

const App = () => {
  return (
    <>
      <div className="flex-column">
        {/* <div className="flex-row">
          <ContadorReducer />
          <ButtonHttpRequest />
        </div> */}
        <hr />
        <div className="flex-row pad-children">
          <FormikForm />
          {/* <Formulario /> */}
        </div>
      </div>
    </>
  );
};

export default App;
