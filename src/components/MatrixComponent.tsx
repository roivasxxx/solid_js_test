import { Index, Show } from "solid-js";
import { alphabet } from "../constants";
import { createStore } from "solid-js/store";

const MatrixComponent = () => {
  const [state, setState] = createStore({ n: 0, matrix: [[0]], vertices: "" });

  const stateHandler = (value: string) => {
    if (Number.isNaN(Number.parseInt(value))) return;

    let numberValue: number = Number.parseInt(value);
    if (numberValue < 1 || numberValue >= alphabet.length) numberValue = 0;
    setState("n", () => numberValue);
  };

  const matrixHandler = (rowIndex: number, colIndex: number) => {
    const val = state.matrix[rowIndex][colIndex] ^ 1;
    setState("matrix", rowIndex, colIndex, () => val);
  };

  const generateMatrix = () => {
    const { n } = state;
    console.log(n);
    if (1 >= n || n >= alphabet.length) setState("matrix", () => [[0]]);
    else {
      const m: number[][] = [];
      for (let i = 0; i < n; i++) {
        m.push(new Array(n).fill(0));
      }
      console.log(m);
      setState("vertices", () => alphabet.slice(0, n));
      setState("matrix", () => m);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Zadejte počet vrcholů"
        class="bg-secondarybg outline-none text-contenttext p-2 rounded border-borderclr border-2 focus:border-active_blue"
        onInput={(e) => stateHandler(e.currentTarget.value)}
      />
      <button onClick={() => generateMatrix()}>Vygeneruj matici</button>
      <Show
        when={state.matrix.length > 1 && state.matrix.length < alphabet.length}
        fallback={<div></div>}
      >
        <table>
          <thead>
            <tr>
              <th class="w-10 m-2"></th>
              <Index each={Array.from(state.vertices)}>
                {(vertex) => <th class="w-10 m-2">{vertex()}</th>}
              </Index>
            </tr>
          </thead>
          <tbody>
            <Index each={state.matrix}>
              {(arr, i) => (
                <tr>
                  <th scope="row">{state.vertices[i]}</th>
                  <Index each={arr()}>
                    {(el, j) => (
                      <td>
                        <button
                          class="bg-secondarybg w-10 p-2"
                          onClick={() => matrixHandler(i, j)}
                        >
                          {el()}
                        </button>
                      </td>
                    )}
                  </Index>
                </tr>
              )}
            </Index>
          </tbody>
        </table>
      </Show>
    </div>
  );
};
export default MatrixComponent;
