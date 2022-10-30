import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import PrivateRouter from "routers/PrivateRouter";
import { Suspense } from "react";
import { spawn } from "child_process";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {PRIVATE_ROUTES.map(({ path, Component }) => (
        //   <Suspense fallback={<span>...loading</span>}>
            <Route
              key={path}
              path={path}
              element={
                <PrivateRouter>
                  <Component />
                </PrivateRouter>
              }
            />
        //   </Suspense>
        ))}
        {PUBLIC_ROUTES.map(({ path, Component }) => (
        //   <Suspense fallback={<span>...loading</span>}>
            <Route
              key={path}
              path={path}
              element={
                <PrivateRouter>
                  <Component />
                </PrivateRouter>
              }
            />
        //   </Suspense>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
