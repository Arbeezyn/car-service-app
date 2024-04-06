import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

import "./App.css";

import Header from "../components/Header/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="App">
        <Header />
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  ),
});
