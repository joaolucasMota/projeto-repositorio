import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";


function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle/>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
