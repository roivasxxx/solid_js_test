import { Component, ErrorBoundary } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import styles from "./App.module.css";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./pages/Home";
import Algos from "./pages/Algos";
import Navbar from "./components/Navbar";

const App: Component = () => {
  return (
    <div>
      <ErrorBoundary fallback={(err) => <ErrorComponent err={err} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algos" element={<Algos />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
