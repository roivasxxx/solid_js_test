import { Component, ErrorBoundary } from "solid-js";
import { Route, Routes } from "solid-app-router";
import styles from "./App.module.css";
import ErrorComponent from "./components/ErrorComponent";

const App: Component = () => {
  return (
    <ErrorBoundary fallback={(err) => <ErrorComponent err={err} />}>
      <div>
        <Routes>
          <Route path="/" element={() => <div>algos list</div>} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;
