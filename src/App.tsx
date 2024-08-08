import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import { store } from "./redux/store";
import { ThemeColorProvider } from "./contexts/ThemeColorContext";

function App() {
  return (
    <Provider store={store}>
      <ThemeColorProvider>
        <Dashboard />
      </ThemeColorProvider>
    </Provider>
  );
}

export default App;
