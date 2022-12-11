import { ParentComponent } from "solid-js";
import Navbar from "../components/Navbar";
import { Page } from "../types";

const PageTemplate: ParentComponent = ({ children, displayNav }: Page) => {
  return (
    <div>
      {displayNav === undefined || displayNav === true ? <Navbar /> : <></>}
      {children}
    </div>
  );
};

export default PageTemplate;
