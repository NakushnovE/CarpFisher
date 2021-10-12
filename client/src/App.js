import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Session from "./components/Session";
import FormSession from "./pages/FormSession";
import SessionDay from "./components/SessionDay";

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Session />
        <SessionDay />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
