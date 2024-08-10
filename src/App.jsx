import { BrowserRouter } from "react-router-dom";
import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { Main } from "./modules/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
