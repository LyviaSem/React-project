import AppRouter from "./router/AppRouter";
import { StoreContextProvider } from "./contexts/StoreContext";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <AppRouter />
      </StoreContextProvider>
    </div>
  );
}

export default App;
