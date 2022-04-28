import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./GlobalStyle";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<Dashboard />}></Route>
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/orders" element={<MainComponent />}></Route>
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/create_order" element={<MainComponent />}></Route>
            </Route>

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
