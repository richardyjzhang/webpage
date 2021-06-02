import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import AdminPage from "./pages/AdminPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5b7050",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/">
              <BlogPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    }
  </React.StrictMode>,
  document.getElementById("root")
);
