import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./GlobalStyle";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Div>
      <GlobalStyle />
      <LoginPage />
      {/* <Sidebar />
      <Dashboard /> */}
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
