import { Accessor } from "solid-js";
import { SetStoreFunction, Store } from "solid-js/store";

const AdjacencyMatrixElement = (props: {
  i: number;
  j: number;
  state: Store<{
    n: number;
    matrix: number[][];
    vertices: string;
  }>;
  setState: SetStoreFunction<{
    n: number;
    matrix: number[][];
    vertices: string;
  }>;
  el: Accessor<number>;
}) => {
  const matrixHandler = (rowIndex: number, colIndex: number) => {
    const val = props.state.matrix[rowIndex][colIndex] ^ 1;
    props.setState("matrix", rowIndex, colIndex, () => val);
  };

  return (
    <td>
      <button
        class="bg-secondarybg w-10 p-2"
        onClick={() => matrixHandler(props.i, props.j)}
      >
        {props.el()}
      </button>
    </td>
  );
};
export default AdjacencyMatrixElement;
