import { ThemeProvider } from "@mui/material";
import "./App.css";
import Moviepage from "./pages/moviepage/Moviepage";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Moviepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
