import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { ThemeWrapper, myTheme } from "./theme";
import "./App.scss";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: ${(p) => p.theme.palette.background.paper};
  height: 64px;
  border: 1px solid ${(p) => p.theme.palette.divider};
`;

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let theme = React.useMemo(() => myTheme(prefersDarkMode ? "dark" : "light"), [
    prefersDarkMode,
  ]);

  const [currentTheme, setCurrentTheme] = useState('light');

  function handleThemeChange() {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  }

  theme = React.useMemo(() => myTheme(currentTheme), [currentTheme]);

  return (
    <ThemeWrapper theme={theme}>
      <div className="container">
        <div className="App">
          <input
            className="switch-input"
            id="theme-switch"
            type="checkbox"
            onChange={handleThemeChange}
          />
          <label className="switch-control" for="theme-switch"></label>
          <header className="App-header">
            <h1>
              Implementing Light vs Dark Mode In React Apps Using Material UI
              and styled-components
            </h1>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <StyledContainer>Some random text!</StyledContainer>
          </header>
        </div>
      </div>
    </ThemeWrapper>
  );
}

export default App;
