import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
