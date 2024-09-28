import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Moviepage from "./pages/moviepage/Moviepage";
import ModalContent from "./components/movieModal/ModalContent";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>

//     </Routes>
//   )
// )
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <ModalContent /> */}
        <Moviepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
