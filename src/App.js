import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./GlobalStyle";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import MainComponent from "./components/MainComponent";

export default function App() {
  return (
    <Div>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Sidebar />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/orders" component={MainComponent} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
