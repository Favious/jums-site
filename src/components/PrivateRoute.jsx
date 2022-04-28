import React from "react";
import { Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute() {
  const currentLocation = useLocation();
  const isAuthorized = useAuth().isSignedIn();

  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: currentLocation }} replace />
  );
}
