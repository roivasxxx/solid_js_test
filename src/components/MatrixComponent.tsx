import { createSignal } from "solid-js";

const MatrixComponent = () => {
  const [state, setState] = createSignal({ n: 1, matrix: [] });

  const stateHandler=(value:string)=>
  {
    console.debug(Number.isNaN(Number.parseInt(value)))
    const numberValue:number=Number.isNaN(Number.parseInt(value))?1:Number.parseInt(value)
    setState({...state(),n:numberValue});      

  }

  return (
    <div>
      <input
        type="number"
        min={1}
        placeholder="Zadejte počet vrcholů"
        class=""
        value={state().n}
        onInput={(e)=>stateHandler(e.currentTarget.value)}
      />
    </div>
  );
};
export default MatrixComponent;
