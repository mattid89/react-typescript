import "./App.css";
import FormikComponentForm from "./Components/FormikComponentForm";
// import FormikForm from "./Components/FormikForm";
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
          <FormikComponentForm />
          {/* <FormikForm /> */}
          {/* <Formulario /> */}
        </div>
      </div>
    </>
  );
};

export default App;
