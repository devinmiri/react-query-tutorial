import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Items from "./components/Items";

const App = () => {
  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose="3000" />

      <Form />
      <Items />
    </section>
  );
};
export default App;
