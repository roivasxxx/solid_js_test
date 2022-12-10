import { Component, JSX } from "solid-js";

const ErrorComponent: Component<{ err: any }> = (props: { err: any }) => {
  console.error("AN ERROR HAS OCCCURED: ", props.err);
  return (
    <div>
      <h1>Oops! An error has occured!</h1>
      <p>{JSON.stringify(props.err)}</p>
    </div>
  );
};
export default ErrorComponent;
