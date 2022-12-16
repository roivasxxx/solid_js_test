import { ParentComponent } from "solid-js";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Page } from "../types";

const PageTemplate: ParentComponent = ({
  children,
  displayNav,
  displayFooter,
}: Page) => {
  return (
    <div class="w-full h-full">
      {displayNav === undefined || displayNav === true ? <Navbar /> : <></>}
      <div
        class="w-4/5 bg-contentbg border-2 border-contentborder p-5 my-5 m-auto rounded" // min-h-[50%]"
      >
        {children}
      </div>
      {displayFooter === undefined || displayFooter === true ? (
        <Footer />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PageTemplate;
