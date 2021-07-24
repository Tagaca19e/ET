import React from "react";

import { ThemeProvider } from "./AppContext";
import {
  Toggle,
  Content,
  Buttons,
  Footer,
  Particles,
  Exprience,
} from "./../components";
import "./app.scss";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Toggle />
        <Content />
        <Buttons />
        <Footer />
        <Exprience />
        <Particles />
      </div>
    </ThemeProvider>
  );
};

export default App;
