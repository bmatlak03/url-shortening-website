import "./App.css";
import Starter from "./containers/Starter/Starter";
import Informations from "./containers/Informations/Informations";
import Footer from "./containers/Footer/Footer";
import Wrapper from "./containers/Wrapper/Wrapper";
function App() {
  return (
    <Wrapper>
      <Starter />
      <Informations />
      <Footer />
    </Wrapper>
  );
}

export default App;
