import { createSignal } from "solid-js";

const MatrixComponent = () => {
  const [state, setState] = createSignal({ n: 1, matrix: [] });
  return (
    <div>
      <input
        type="number"
        min={1}
        placeholder="Zadejte počet vrcholů"
        class=""
      />
    </div>
  );
};
export default MatrixComponent;
