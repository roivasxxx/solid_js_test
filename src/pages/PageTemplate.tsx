import { ParentComponent } from "solid-js";
import Navbar from "../components/Navbar";
import { Page } from "../types";

const PageTemplate: ParentComponent = ({ children }: Page) => {
  return <div>{children}</div>;
};

export default PageTemplate;
