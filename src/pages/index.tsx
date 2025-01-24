import { lazy, Suspense, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ROUTES } from "../types";
import api from "../lib/api";

const Login = lazy(() => import("./Login/Login"));
const Home = lazy(() => import("./Home/Home"));

const Pages = () => {
  const isAuthenticated = useMemo(() => api.isAuthenticated(), []);
  console.log('isAuthenticated :>> ', isAuthenticated);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={!isAuthenticated ? <Login /> : <Navigate to={ROUTES.HOME} />} />
        <Route
          path={ROUTES.HOME}
          element={isAuthenticated ? <Home /> : <Navigate to={ROUTES.LOGIN} />}
        />

        {/* Redirect to Home if authenticated */}
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? ROUTES.HOME : ROUTES.LOGIN} />}
        />
      </Routes>
    </Suspense>
  )
};

export default Pages