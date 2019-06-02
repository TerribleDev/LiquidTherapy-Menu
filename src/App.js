import React from "react";
import styles from "./App.module.scss";
import Table from "./Table";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import NavBar from "./NavBar.js";

function App() {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true
    }
  });
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <div className={styles.container}>
          <Table />
        </div>
      </MuiThemeProvider>
    </CssBaseline>
  );
}

export default App;
