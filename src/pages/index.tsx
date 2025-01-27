import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ROUTES } from "../types";
import api from "../lib/api";

const Login = lazy(() => import("./Login/Login"));
const Home = lazy(() => import("./Home/Home"));

const Pages = () => {
  const auth = () => api.isAuthenticated();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={!auth() ? <Login /> : <Navigate to={ROUTES.HOME} />} />
        <Route
          path={ROUTES.HOME}
          element={auth() ? <Home /> : <Navigate to={ROUTES.LOGIN} />}
        />

        {/* Redirect to Home if authenticated */}
        <Route
          path="/"
          element={<Navigate to={auth() ? ROUTES.HOME : ROUTES.LOGIN} />}
        />
      </Routes>
    </Suspense>
  )
};

export default Pages