import { Component, ErrorBoundary } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import styles from "./App.module.css";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./pages/Home";
import Algos from "./pages/Algos";
import Navbar from "./components/Navbar";
import Articulations from "./pages/Articulations";

const App: Component = () => {
  return (
    <ErrorBoundary fallback={(err) => <ErrorComponent err={err} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algos">
          <Route path="/" element={<Algos />} />
          <Route path="/articulations" element={<Articulations />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
