import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "./redux/store";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
